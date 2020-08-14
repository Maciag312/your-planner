package maciag.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TaskDTO {

    @ApiModelProperty(position = 0)
    private Long id;
    @ApiModelProperty(position = 1)
    private String name;
    @ApiModelProperty(position = 2)
    private String category;
    @ApiModelProperty(position = 3)
    private Long duration;
    @ApiModelProperty(position = 4)
    private String date;
    @ApiModelProperty(position = 5)
    private boolean isDone;
}
