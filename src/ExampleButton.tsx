export interface ExampleButtonProps {
  label?: string;
  onClick?: () => void;
}

export const ExampleButton = (props: ExampleButtonProps) => {
  return (
    <button
      type="button"
      class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
      onClick={props.onClick}
    >
      Deneme {props.label ?? "Click me"}
    </button>
  );
};
