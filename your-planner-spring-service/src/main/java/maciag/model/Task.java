package maciag.model;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Task(String name, Category category, Date date) {
        this.name = name;
        this.category = category;
        this.date = date;
        this.duration = duration;
        this.isTimeLimited = false;
    }

    public Task(String name, Category category, Date date, Long duration) {
        this.name = name;
        this.category = category;
        this.date = date;
        this.duration = duration;
        this.isTimeLimited = true;
        this.isRun = false;
    }

    private boolean isDone;
    private String name;

    @ManyToOne(fetch=FetchType.LAZY)
    @NotNull
    @JoinColumn(name="category_id")
    private Category category;

    @ManyToOne(fetch=FetchType.LAZY)
    @NotNull
    @JoinColumn(name="user_id")
    private User user;

    @Temporal(value = TemporalType.TIMESTAMP)
    @NotNull
    private Date date;

    @Temporal(value = TemporalType.TIMESTAMP)
    private Date startDate;

    private boolean isTimeLimited = false;

    private boolean isRun;

    private Long duration;

}
