import { Select } from "@chakra-ui/react";
interface SelectInputProps {
  placeholder: string;
  options: string[];
}
const SelectInput = ({ placeholder, options }: SelectInputProps) => {
  return (
    <Select
      w={"100%"}
      h={"36px"}
      flex={1}
      padding={"2px 8px 0"}
      bgColor={"#e2e2e2"}
      border={"1px solid #a9a9a9"}
      fontSize={"14px"}
      borderRadius={"2px"}
      _focus={{ border: "none" }}
      placeholder={placeholder}
    >
      {options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      })}
    </Select>
  );
};

export default SelectInput;
