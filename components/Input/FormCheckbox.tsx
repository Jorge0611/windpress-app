interface Fields {
  id: string;
  name: string;
  label: string;
  description: string;
}
const FormCheckbox = ({ id, name, label, description }: Fields) => {
  return (
    <>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id={id}
            name={name}
            type="checkbox"
            className="focus:ring-blue-500 h-4 w-4 text-blue-500 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={id} className="font-medium text-blue-gray-600">
            {label}
          </label>
          <p className="text-blue-gray-500">{description}</p>
        </div>
      </div>
    </>
  );
};

export default FormCheckbox;
