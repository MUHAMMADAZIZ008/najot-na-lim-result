import { useForm } from "react-hook-form";
import { useCreateProduct } from "../service/mutation/useCreateProduct";
import { useQueryClient } from "@tanstack/react-query";

interface inputS {
  title: string;
  img: string;
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<inputS>();
  const { mutate, isPending } = useCreateProduct();
  const client = useQueryClient();

  const submit = (data: inputS) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        client.invalidateQueries({ queryKey: ["product_list"] });
      },
      onError: (error) => {
        setError("title", { message: error?.message });
      },
      onSettled: () => {},
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input
            className="bg-blue-300 p-[10px] border placeholder:text-amber-300"
            placeholder="Title"
            {...register("title")}
            type="text"
          />
          {errors.title && (
            <p className="text-[12px] text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div>
          <input
            className="bg-blue-300 p-[10px] border placeholder:text-amber-300"
            {...register("img")}
            type="text"
          />
        </div>
        <button
          disabled={isPending}
          className="p-[10px] bg-green-400"
          type="submit"
        >
          {isPending ? "Loading...." : "send"}
        </button>
      </form>
    </div>
  );
};
