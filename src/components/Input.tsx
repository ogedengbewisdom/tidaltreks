import { Input } from "@chakra-ui/react";

interface InputProps {
  placeholder: string;
  type: string;
}
const InputText = ({ placeholder, type }: InputProps) => {
  return (
    <Input
      w={"100%"}
      h={"36px"}
      type={type}
      padding={"2px 8px 0"}
      bgColor={"#e2e2e2"}
      border={"1px solid #a9a9a9"}
      fontSize={"14px"}
      borderRadius={"2px"}
      _focus={{ border: "none" }}
      placeholder={placeholder}
    />
  );
};

export default InputText;
