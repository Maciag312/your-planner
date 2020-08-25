

## Overview

It’s your planner backend support service. Having JWT by signing in or signing up authorize anyrequest by adding Bearer token. Service allows to add, remove, modify task. Task can be run and
stop or mark as done


# Your planner service
[![](https://github.com/Maciag312/your-planner/raw/master/sshots/ypss0.png)](https://github.com/Maciag312/your-planner/raw/master/sshots/ypss0.png)

[![](https://github.com/Maciag312/your-planner/raw/master/sshots/ypss1.png)](https://github.com/Maciag312/your-planner/raw/master/sshots/ypss1.png)

[![](https://github.com/Maciag312/your-planner/raw/master/sshots/ypss2.png)](https://github.com/Maciag312/your-planner/raw/master/sshots/ypss2.png)

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
``````
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
``````
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
``````
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
``````
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
``````
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
``````
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

