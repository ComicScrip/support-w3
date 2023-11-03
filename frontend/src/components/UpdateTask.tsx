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

  const [updateTask] = useModifyTaskMutation();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());

    console.log(e);

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
      (document.getElementById("my_modal_1") as any)?.close();
    });
  }

  return (
    <dialog id="my_modal_1" className="modal" >
      <div className="modal-box">
        {task && (
          <form
            className="flex flex-col updateForm"
            onSubmit={handleSubmit}
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
              name="finished"
              className="toggle"
              defaultChecked={task.finished || false}
              />
            <button type="submit" className="btn green">
              Valider
            </button>
          </form>
        )}

        <div className="modal-action">
          <form method="dialog">
            <button className="btn mr-2 close-btn" onClick={() => handleReset()}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateTask;
