package maciag.service;


import com.fasterxml.jackson.databind.ObjectMapper;
import maciag.dto.TaskDTO;
import maciag.model.Category;
import maciag.model.Task;
import maciag.model.User;
import maciag.repository.CategoryRepository;
import maciag.repository.TaskRepository;
import maciag.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskService {

    Logger logger = LoggerFactory.getLogger(TaskService.class);

    @Autowired
    TaskRepository taskRepository;

    UserRepository userRepository;

    CategoryRepository categoryRepository;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    public TaskService(TaskRepository taskRepository, UserRepository userRepository, CategoryRepository categoryRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
        this.categoryRepository = categoryRepository;
    }

    private boolean doesTaskExistsAndBelongsToUser(Long task_id, User fetchUser){
        Task task = taskRepository.findById(task_id).orElse(null);
        if(task==null)
            return false;
        if(!task.getUser().getUsername().equals(fetchUser.getUsername()))
            return false;
        return true;
    }

    public void addTask(User user, TaskDTO taskDTO){
        Category category = categoryRepository.findByName(taskDTO.getCategory()).orElse(null);
        if(category==null)
            category = new Category(taskDTO.getCategory());

        category = categoryRepository.save(category);

        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        Date date;
        try {
            date = format.parse(taskDTO.getDate());
        }catch (ParseException e){
            date = Calendar.getInstance().getTime();
            logger.warn("Parsing exception current time was assigned");
        }
        Task task;
        if(taskDTO.getDuration()!=0)
            task = new Task(taskDTO.getName(), category ,date, taskDTO.getDuration());
        else
            task = new Task(taskDTO.getName(), category ,date);
        task.setUser(user);
        taskRepository.save(task);
    }
    public void removeTask(Long task_id, User user){
        Task task = taskRepository.findById(task_id).orElse(null);
        if(task==null)
            return;
        if(task.getUser().getUsername().equals(user.getUsername()))
            taskRepository.deleteById(task_id);
    }
    public void removeTasks(List<Long> tasks_id, User user){
        for(int i=0;i<tasks_id.size();i++)
            this.removeTask(tasks_id.get(i), user);
    }
    private boolean areDaysAndYearEqual(Date date, Date date2){
        Calendar c1 = Calendar.getInstance();
        Calendar c2 = Calendar.getInstance();
        c1.setTime(date);
        c2.setTime(date2);
        return c1.get(Calendar.DAY_OF_YEAR) == c2.get(Calendar.DAY_OF_YEAR) && c1.get(Calendar.YEAR) == c2.get(Calendar.YEAR);
    }
    public List<TaskDTO> getAllTasksByDate(User user,Date date){
        List<TaskDTO> tasks = new ArrayList<>();
        List<Task> foundTasks =  taskRepository.findAllByUser(user);
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        return foundTasks.stream().filter(t->areDaysAndYearEqual(t.getDate(),date)).map(t->new TaskDTO(t.getId(), t.getName(),t.getCategory().getName(), t.getDuration(), dateFormat.format(t.getDate()),t.isDone())).collect(Collectors.toList());
    }
    public List<TaskDTO> getAllTasks(User user){
        List<TaskDTO> tasks = new ArrayList<>();
        List<Task> foundTasks =  taskRepository.findAllByUser(user);
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        return foundTasks.stream().map(t->new TaskDTO(t.getId(), t.getName(),t.getCategory().getName(),t.getDuration(), dateFormat.format(t.getDate()),t.isDone())).collect(Collectors.toList());
    }

    public void modifyTask(TaskDTO taskDTO, User user){
        Task task = taskRepository.findById(taskDTO.getId()).orElse(null);
        if(task==null)
            return;
        if(!task.getUser().getUsername().equals(user.getUsername()))
            return;
        task.setDone(taskDTO.isDone());
        Category category = categoryRepository.findByName(taskDTO.getCategory()).orElse(null);
        if(category==null)
            category = categoryRepository.save(new Category(taskDTO.getCategory()));
        task.setCategory(category);
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");

        try {
            task.setDate(dateFormat.parse(taskDTO.getDate()));
        }catch(ParseException p){
            logger.warn("Parse exception: unpropper date format " + p);
        }
        task.setDuration(taskDTO.getDuration());
        taskRepository.save(task);
    }
    public void addTasks(User user, List<TaskDTO> taskDTOList){
        for(int i=0;i<taskDTOList.size();i++)
            addTask(user, taskDTOList.get(i));
    }

    public String toggleIsDoneAndShowState(Long task_id, User fetchUser) {
        Task task = taskRepository.findById(task_id).orElse(null);
        if(task==null)
            return "not exist";
        if(!task.getUser().getUsername().equals(fetchUser.getUsername()))
            return "not exist";
        task.setDone(!task.isDone());
        return task.isDone()?"done":"not done";
    }
    public boolean isTaskRunning(Long task_id, User fetchUser){
        Task task = taskRepository.findById(task_id).orElse(null);
        if(task!=null)
            return task.isRun();
        return false;
    }

    public void runTask(Long task_id,  User fetchUser){
        if(doesTaskExistsAndBelongsToUser(task_id, fetchUser)) {
            Task task = taskRepository.findById(task_id).get();
            if(task.isTimeLimited()) {
                task.setStartDate(Calendar.getInstance().getTime());
                task.setRun(true);
                taskRepository.save(task);
            }
        }
    }

    public void stopTask(Long task_id,  User fetchUser){
        if(doesTaskExistsAndBelongsToUser(task_id, fetchUser)) {
            Task task = taskRepository.findById(task_id).get();
            if(task.getStartDate()!=null) {
                long timePast = Calendar.getInstance().getTimeInMillis() - task.getStartDate().getTime();
                if (timePast > task.getDuration()) {
                    task.setDuration(Long.valueOf(0));
                    task.setDone(true);
                }
                else
                    task.setDuration(task.getDuration() - timePast);
                task.setStartDate(null);
                task.setRun(false);
                taskRepository.save(task);
            }
        }
    }

    public long calculateAndGetDuration(Long task_id, User fetchUser) {
        if (doesTaskExistsAndBelongsToUser(task_id, fetchUser)) {
            Task task = taskRepository.findById(task_id).get();
            if(task.getStartDate()!=null) {
                long timePast = Calendar.getInstance().getTimeInMillis() - task.getStartDate().getTime();
                if (timePast > task.getDuration()) {
                    task.setDuration(Long.valueOf(0));
                    task.setDone(true);
                    task.setRun(false);
                } else
                    task.setDuration(task.getDuration() - timePast);
                taskRepository.save(task);
            }
            return task.getDuration();
        }
        return 0;
    }
}
