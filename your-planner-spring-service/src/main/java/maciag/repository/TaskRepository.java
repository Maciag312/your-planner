package maciag.repository;

import maciag.model.Task;
import maciag.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task,Long> {

    List<Task> findAllByUser(User user);

}
