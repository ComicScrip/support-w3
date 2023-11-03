import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTimeISO: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: Task;
  deleteTask: Scalars['Boolean'];
  modifyTask: Task;
};


export type MutationCreateTaskArgs = {
  data: NewTaskInput;
};


export type MutationDeleteTaskArgs = {
  taskId: Scalars['Float'];
};


export type MutationModifyTaskArgs = {
  data: UpdateTaskInput;
  taskId: Scalars['Float'];
};

export type NewTaskInput = {
  description?: InputMaybe<Scalars['String']>;
  finished?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getTask: Task;
  tasks: Array<Task>;
};


export type QueryGetTaskArgs = {
  taskId: Scalars['Float'];
};

export type Task = {
  __typename?: 'Task';
  creationDate: Scalars['DateTimeISO'];
  description?: Maybe<Scalars['String']>;
  finished?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type UpdateTaskInput = {
  description?: InputMaybe<Scalars['String']>;
  finished?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ModifyTaskMutationVariables = Exact<{
  taskId: Scalars['Float'];
  data: UpdateTaskInput;
}>;


export type ModifyTaskMutation = { __typename?: 'Mutation', modifyTask: { __typename?: 'Task', id: number } };

export type AddNewTaskMutationVariables = Exact<{
  data: NewTaskInput;
}>;


export type AddNewTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'Task', id: number } };

export type EraseTaskMutationVariables = Exact<{
  taskId: Scalars['Float'];
}>;


export type EraseTaskMutation = { __typename?: 'Mutation', deleteTask: boolean };

export type TasksQueryVariables = Exact<{ [key: string]: never; }>;


export type TasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: number, name: string, description?: string | null, creationDate: any, finished?: boolean | null }> };


export const ModifyTaskDocument = gql`
    mutation ModifyTask($taskId: Float!, $data: UpdateTaskInput!) {
  modifyTask(taskId: $taskId, data: $data) {
    id
  }
}
    `;
export type ModifyTaskMutationFn = Apollo.MutationFunction<ModifyTaskMutation, ModifyTaskMutationVariables>;

/**
 * __useModifyTaskMutation__
 *
 * To run a mutation, you first call `useModifyTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModifyTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [modifyTaskMutation, { data, loading, error }] = useModifyTaskMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useModifyTaskMutation(baseOptions?: Apollo.MutationHookOptions<ModifyTaskMutation, ModifyTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ModifyTaskMutation, ModifyTaskMutationVariables>(ModifyTaskDocument, options);
      }
export type ModifyTaskMutationHookResult = ReturnType<typeof useModifyTaskMutation>;
export type ModifyTaskMutationResult = Apollo.MutationResult<ModifyTaskMutation>;
export type ModifyTaskMutationOptions = Apollo.BaseMutationOptions<ModifyTaskMutation, ModifyTaskMutationVariables>;
export const AddNewTaskDocument = gql`
    mutation addNewTask($data: NewTaskInput!) {
  createTask(data: $data) {
    id
  }
}
    `;
export type AddNewTaskMutationFn = Apollo.MutationFunction<AddNewTaskMutation, AddNewTaskMutationVariables>;

/**
 * __useAddNewTaskMutation__
 *
 * To run a mutation, you first call `useAddNewTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewTaskMutation, { data, loading, error }] = useAddNewTaskMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddNewTaskMutation(baseOptions?: Apollo.MutationHookOptions<AddNewTaskMutation, AddNewTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNewTaskMutation, AddNewTaskMutationVariables>(AddNewTaskDocument, options);
      }
export type AddNewTaskMutationHookResult = ReturnType<typeof useAddNewTaskMutation>;
export type AddNewTaskMutationResult = Apollo.MutationResult<AddNewTaskMutation>;
export type AddNewTaskMutationOptions = Apollo.BaseMutationOptions<AddNewTaskMutation, AddNewTaskMutationVariables>;
export const EraseTaskDocument = gql`
    mutation EraseTask($taskId: Float!) {
  deleteTask(taskId: $taskId)
}
    `;
export type EraseTaskMutationFn = Apollo.MutationFunction<EraseTaskMutation, EraseTaskMutationVariables>;

/**
 * __useEraseTaskMutation__
 *
 * To run a mutation, you first call `useEraseTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEraseTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [eraseTaskMutation, { data, loading, error }] = useEraseTaskMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useEraseTaskMutation(baseOptions?: Apollo.MutationHookOptions<EraseTaskMutation, EraseTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EraseTaskMutation, EraseTaskMutationVariables>(EraseTaskDocument, options);
      }
export type EraseTaskMutationHookResult = ReturnType<typeof useEraseTaskMutation>;
export type EraseTaskMutationResult = Apollo.MutationResult<EraseTaskMutation>;
export type EraseTaskMutationOptions = Apollo.BaseMutationOptions<EraseTaskMutation, EraseTaskMutationVariables>;
export const TasksDocument = gql`
    query Tasks {
  tasks {
    id
    name
    description
    creationDate
    finished
  }
}
    `;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTasksQuery(baseOptions?: Apollo.QueryHookOptions<TasksQuery, TasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
      }
export function useTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
        }
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksQueryResult = Apollo.QueryResult<TasksQuery, TasksQueryVariables>;