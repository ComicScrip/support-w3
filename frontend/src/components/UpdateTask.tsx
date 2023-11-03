import React, { Dispatch, SetStateAction, FormEvent, useRef } from "react";
import { Task, useModifyTaskMutation } from "@/graphql/generated/schema";

interface updateTaskProps {
  task: Task | null;
  setOpenTask: Dispatch<SetStateAction<Task | null>>;
  refetch: any;
}

const UpdateTask = ({ task, setOpenTask, refetch }: updateTaskProps) => {
  function handleReset() {
    setOpenTask(null);
  }

  const formRef = useRef<HTMLFormElement>();

  const [updateTask] = useModifyTaskMutation();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());

    updateTask({
      variables: {
        taskId: task?.id as number,
        data: {
          ...formJSON,
        },
      },
    }).then(() => {
      refetch();
      handleReset();
    });
  }

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Modifier sa tâche</h3>
        {task && (
          <form
            className="flex flex-col"
            onSubmit={handleSubmit}
            ref={formRef as any}
          >
            <label htmlFor="name">Name</label>
            <input type="text" name="name" defaultValue={task.name} />
            <label htmlFor="description">description</label>
            <input
              type="text"
              name="description"
              defaultValue={task.description || ""}
            />
            <label htmlFor="finished">finished</label>
            <input
              type="checkbox"
              className="toggle"
              defaultChecked={task.finished || false}
            />
          </form>
        )}

        <div className="modal-action">
          <form method="dialog">
            <button className="btn mr-2" onClick={() => handleReset()}>
              Close
            </button>
            <button
              className="btn"
              onClick={() => {
                formRef?.current?.submit();
              }}
            >
              Valider
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateTask;
