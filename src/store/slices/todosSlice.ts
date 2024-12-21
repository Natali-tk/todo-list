import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Todo = {
    id: number|string,
    title: string,
    completed: boolean,
    description:string
}

export const todosSlice = createApi({
    reducerPath: "todoApp",
    baseQuery: fetchBaseQuery({ baseUrl: '/data.json' }),
    tagTypes: ["TodoList"],
    endpoints: (builder) => ({
        getTodoList: builder.query<Todo[], void>({
            query: () => " ",
            providesTags: (result) =>
                // is result available?
                result
                    ? // successful query
                    [
                        ...result.map(({ id }) => ({ type: 'TodoList', id }) as const),
                        { type: 'TodoList', id: 'LIST' },
                    ]
                    : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                    [{ type: 'TodoList', id: 'LIST' }],
        }),
     
        addTodo: builder.mutation({
            // mutation is used because we need to mutate the data instead of just query or getting the data
            query: (body) => ({
                // whole todo object is passed where as in delete just todo's id is passed
                url: " ",
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: 'TodoList', id: 'LIST' }],
          
        }),
       
    }),
})

export const { useGetTodoListQuery, useAddTodoMutation } = todosSlice;
export default todosSlice.reducer;