export interface ExampleButtonProps {
  label?: string;
  onClick?: () => void;
  class?: string;
}

export const ExampleButton = (props: ExampleButtonProps) => {
  console.log("ExampleButton class:", props.class);
  return (
    <button
      type="button"
      class={props.class}
      //|| "px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 focus:outline-none
      onClick={props.onClick}
    >
      {props.label ?? "Click me"}
    </button>
  );
};
