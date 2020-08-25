

## Overview

It’s your planner backend support service. Having JWT by signing in or signing up authorize anyrequest by adding Bearer token. Service allows to add, remove, modify task. Task can be run and
stop or mark as done


# Your planner service
[![](https://github.com/Maciag312/your-planner/raw/master/sshots/ypss0.png)](https://github.com/Maciag312/your-planner/raw/master/sshots/ypss0.png)

[![](https://github.com/Maciag312/your-planner/raw/master/sshots/ypss1.png)](https://github.com/Maciag312/your-planner/raw/master/sshots/ypss1.png)

[![](https://github.com/Maciag312/your-planner/raw/master/sshots/ypss2.png)](https://github.com/Maciag312/your-planner/raw/master/sshots/ypss2.png)
# Your planner service


## Version information

_Version_ : 1.0.

## Contact information

_Contact Email_ : bartekmaciag@icloud.com

## License information

_LicenseLicense URL_ : MIT License : [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
_Terms of service_ : null

## URI scheme

_HostBasePath_ : localhost:8080 : /

## Tags

- home : Home Controller
- tasks : Task Controller
- users : Operations about users

## Security

## Authorization
In order to be authorizeited and authenticated first user has to register yourself or log in then use JWT that is returned and put it in every request using header Authorization Bearer {Token}

_TypeName_ : apiKey : Authorization Bearer {jwt}
_In_ : HEADER

## Paths

### hello

##### GET /

#### Responses

```
HTTPCode Description Schema
200 OK string
```
 

#### Tags

- home

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
```
### Allows authenticated user to add task if duration is 0

### it means that it’s not time limited

```
POST /tasks/addTask
```
#### Parameters

```
Type Name Description Schema
Body Task required taskDTO TaskDTO
```
#### Responses


```
HTTPCode Description Schema
200 OK No Content
400 Something went wrong No Content
403 Access denied No Content
404 The user doesn’t exist No Content
500 Expired or invalid JWT token No Content
```
#### Consumes

- application/json

 

#### Tags

- tasks

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
```
### Allows authenticated user to add task if duration is 0

### it means that it’s not timelimited

```
GET /tasks/addTasks
```
#### Parameters

```
Type Name Description Schema
Body Task required taskDTOs < TaskDTO > array
```

#### Responses

```
HTTPCode Description Schema
200 OK No Content
400 Something went wrong No Content
403 Access denied No Content
404 The user doesn’t exist No Content
500 Expired or invalid JWT token No Content
```
 

#### Tags

- tasks

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
```
### Calculates duration and stop task if its finished

```
GET /tasks/calculateAndGetDuration/{task_id}
```
#### Parameters

```
Type Name Description Schema
Path task_id required task_id integer (int64)
```
#### Responses


```
HTTPCode Description Schema
200 OK No Content
400 Something went wrong No Content
403 Access denied No Content
404 The user doesn’t exist No Content
500 Expired or invalid JWT token No Content
```
 

#### Tags

- tasks

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
```
### Returns tasks specified for principal

```
GET /tasks/getAllTasks
```
#### Responses

```
HTTPCode Description Schema
200 OK < TaskDTO > array
400 Something went wrong No Content
403 Access denied No Content
404 The user doesn’t exist No Content
```

```
HTTPCode Description Schema
500 Expired or invalid JWT token No Content
```
 

#### Tags

- tasks

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
```
### Returns tasks specified for principal limited by date

```
GET /tasks/getAllTasksByDate/{date}
```
#### Parameters

```
Type Name Description Schema
Path date required date string
```
#### Responses

```
HTTPCode Description Schema
200 OK < TaskDTO > array
400 Something went wrong No Content
403 Access denied No Content
404 The user doesn’t exist No Content
500 Expired or invalid JWT token No Content
```

 

#### Tags

- tasks

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
```
### ${TaskController.isTaskRunning}

```
GET /tasks/isTaskRunning/{task_id}
```
#### Parameters

```
Type Name Description Schema
Path task_id required task_id integer (int64)
```
#### Responses

```
HTTPCode Description Schema
200 OK boolean
400 Something went wrong No Content
403 Access denied No Content
404 The user doesn’t exist No Content
500 Expired or invalid JWT token No Content
```
 


#### Tags

- tasks

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
```
### Modify existing task but type is time limited or not is

### not possible to change

```
POST /tasks/modifyTask
```
#### Parameters

```
Type Name Description Schema
Body taskDTO required taskDTO TaskDTO
```
#### Responses

```
HTTPCode Description Schema
200 OK No Content
400 Something went wrong No Content
403 Access denied No Content
404 The user doesn’t exist No Content
500 Expired or invalid JWT token No Content
```
#### Consumes

- application/json

 


#### Tags

- tasks

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
``````
### Removes task by id

```
GET /tasks/removeTask/{task_id}
```
#### Parameters

```
Type Name Description Schema
Path task_id required task_id integer (int64)
```
#### Responses

```
HTTPCode Description Schema
200 OK No Content
400 Something went wrong No Content
403 Access denied No Content
404 The user doesn’t exist No Content
500 Expired or invalid JWT token No Content
```
 

#### Tags

- tasks


#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
``````
### Iteratively removes task by id

```
GET /tasks/removeTasks
```
#### Parameters

```
Type Name Description Schema
Body task_ids required task_ids < integer (int64) >array
```
#### Responses

```
HTTPCode Description Schema
200 OK No Content
400 Something went wrong No Content
403 Access denied No Content
404 The user doesn’t exist No Content
500 Expired or invalid JWT token No Content
```
 

#### Tags

- tasks

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
```

### Runs task counting down duration until it’s stop

```
GET /tasks/runTask/{task_id}
```
#### Parameters

```
Type Name Description Schema
Path task_id required task_id integer (int64)
```
#### Responses

```
HTTPCode Description Schema
200 OK No Content
400 Something went wrong No Content
403 Access denied No Content
404 The user doesn’t exist No Content
500 Expired or invalid JWT token No Content
```
 

#### Tags

- tasks

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
``````
### Calculates value of duration and set isRun to false,

### mark as done if duration is run out


```
GET /tasks/stopTask/{task_id}
```
#### Parameters

```
Type Name Description Schema
Path task_id required task_id integer (int64)
```
#### Responses

```
HTTPCode Description Schema
200 OK No Content
400 Something went wrong No Content
403 Access denied No Content
404 The user doesn’t exist No Content
500 Expired or invalid JWT token No Content
```
 

#### Tags

- tasks

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
``````
### ${TaskController.toggleIsDone}

```
GET /tasks/toggleIsDone/{task_id}
```

#### Parameters

```
Type Name Description Schema
Path task_id required task_id integer (int64)
```
#### Responses

```
HTTPCode Description Schema
200 OK string
400 Something went wrong No Content
403 Access denied No Content
404 The user doesn’t exist No Content
500 Expired or invalid JWT token No Content
```
 

#### Tags

- tasks

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
```
### Returns current user’s data

```
GET /users/me
```
#### Responses


```
HTTPCode Description Schema
200 OK UserResponseDTO
400 Something went wrong No Content
403 Access denied No Content
500 Expired or invalid JWT token No Content
```
 

#### Tags

- users

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
```Unknown apiKey
```
### Authenticates user and returns its JWT token.

```
POST /users/signin
```
#### Parameters

```
Type Name Description Schema
Query password optional Password string
Query username optional Username string
```
#### Responses


```
HTTPCode Description Schema
200 OK string
400 Something went wrong No Content
422 Invalid username/password supplied No Content
```
#### Consumes

- application/json

 

#### Tags

- users

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
```
### Creates user and returns its JWT token

```
POST /users/signup
```
#### Parameters

```
Type Name Description Schema
Body user optional Signup User UserDataDTO
```
#### Responses

```
HTTPCode Description Schema
200 OK string
```

```
HTTPCode Description Schema
400 Something went wrong No Content
403 Access denied No Content
422 Username is already in use No Content
```
#### Consumes

- application/json

 

#### Tags

- users

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
```
### Returns specific user by username

```
GET /users/{username}
```
#### Parameters

```
Type Name Description Schema
Path username optional Username string
```
#### Responses

```
HTTPCode Description Schema
200 OK UserResponseDTO
```

```
HTTPCode Description Schema
400 Something went wrong No Content
403 Access denied No Content
404 The user doesn’t exist No Content
500 Expired or invalid JWT token No Content
```
 

#### Tags

- users

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
```Unknown apiKey
```
### Deletes specific user by username

```
DELETE /users/{username}
```
#### Parameters

```
Type Name Description Schema
Path username optional Username string
```
#### Responses

```
HTTPCode Description Schema
200 OK string
```

```
HTTPCode Description Schema
400 Something went wrong No Content
403 Access denied No Content
404 The user doesn’t exist No Content
500 Expired or invalid JWT token No Content
```
 

#### Tags

- users

#### Security

```
Type Name Scopes
apiKey Authorization Bearer {jwt}

```
Type Name Scopes
apiKey Authorization Bearer {jwt}
```Unknown apiKey
```
## Definitions

### TaskDTO

```
Name Schema
category optional string
date optional string
done optional boolean
duration optional integer (int64)
```

```
Name Schema
id optional integer (int64)
name optional string
```
### UserDataDTO

```
Name Schema
email optional string
password optional string
roles optional < enum (ROLE_ADMIN, ROLE_CLIENT) > array
username optional string
```
### UserResponseDTO

```
Name Schema
email optional string
id optional integer (int32)
roles optional < enum (ROLE_ADMIN, ROLE_CLIENT) > array
username optional string
```


