import * as React from "react";
import Button from "../../../src/components/Button/Button";
import Input from "../../../src/components/input/Input";
import { comments } from "../../../src/data/data";

export interface IVaildCommentFormProps {}

export function VaildCommentForm(props: IVaildCommentFormProps) {
  const [inputField, setInputField] = React.useState({
    comment: "",
    name: "",
    email: "",
  });
  const [errorInput, setErrorInputs] = React.useState({
    comment: "",
    name: "",
    email: "",
    msg: "",
  });

  // to get the value from input field
  const onChange = (e: any) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };
  //to not rerender the component
  const memorized = React.useMemo(() => {
    return setInputField({
      ...inputField,
      name: inputField.name,
      email: inputField.email,
    });
  }, [inputField.name, inputField.email]);

  //  submit form
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { email, comment, name } = inputField;
    Validatiors(email, comment, name);

    if (email && name && comment) {
      comments.push({ name, email, comment });
      // show the message that create a new array push
      setErrorInputs({
        ...errorInput,
        msg: "we use push for dummy data , you have to get back to home and get back here to see a comment ",
      });
      // to clean the input
      setInputField({ ...inputField, name: "", email: "", comment: "" });
    }
  };

  //check the input
  const Validatiors = (email: string, comment: string, name: string) => {
    //check the name
    if (!name) {
      return setErrorInputs({ ...errorInput, name: "name is required" });
    }
    if (!comment) {
      return setErrorInputs({ ...errorInput, comment: "comment is required" });
    }
    // check the email
    if (!email) {
      return setErrorInputs({ ...errorInput, email: "email is required" });
    } else if (email) {
      // regex check if this is email or not
      let checkedEmail = email.match(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      );
      if (!checkedEmail) {
        return setErrorInputs({
          ...errorInput,
          email: "Enter a valid email address",
        });
      }
    }
  };
  //   destractor
  const { msg, comment, name, email } = errorInput;

  return (
    <form onSubmit={handleSubmit} className="validCommentForm">
      <label className="block" htmlFor="text-area">
        write a commint
      </label>
      {msg && <span className="text-green-400">{msg}</span>}
      <textarea
        name="comment"
        placeholder="please write your commint"
        id=""
        value={inputField.comment}
        onChange={(event: any) => onChange(event)}
        onBlur={() =>
          setErrorInputs({
            ...errorInput,
            comment: "",
          })
        }
        onClick={() =>
          setErrorInputs({
            ...errorInput,
            comment: "",
          })
        }
        className="textArea"
      ></textarea>
      {comment && <span className="text-red-500">{comment}</span>}

      <div className="groupInput">
        <Input
          label="name"
          name="name"
          value={inputField.name}
          error={name}
          onChange={(event: any) => onChange(event)}
          onBlur={() =>
            setErrorInputs({
              ...errorInput,
              name: "",
            })
          }
          onClick={() =>
            setErrorInputs({
              ...errorInput,
              name: "",
            })
          }
          divStyel="flex flex-col flex-1"
          className="mt-2 p-3 outline outline-1 outline-NormalGray rounded-sm focus:outline-LightBlack"
        />
        <Input
          label="email"
          type="email"
          name="email"
          value={inputField.email}
          error={email}
          onClick={() =>
            setErrorInputs({
              ...errorInput,
              email: "",
            })
          }
          onBlur={() =>
            setErrorInputs({
              ...errorInput,
              email: "",
            })
          }
          onChange={(event: any) => onChange(event)}
          divStyel="flex flex-col flex-1"
          className="mt-2 p-3 outline outline-1 outline-NormalGray rounded-sm focus:outline-LightBlack"
        />
      </div>

      {/* <div className="groupInput">
        <div className="formInput">
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            value={inputField.name}
            onChange={(event: any) => onChange(event)}
            className="inputField"
            placeholder="please write your name"
          />
          {name && <span className="text-red-500">{name}</span>}
        </div>
        <div className="formInput">
          <label htmlFor="email">email</label>
          <input
            type="email"
            className="inputField"
            value={inputField.email}
            onChange={(event: any) => onChange(event)}
            name="email"
            placeholder="please write your email"
          />
          {email && <span className="text-red-500">{email}</span>}
        </div>
      </div> */}
      <Button
        type="submit"
        className="my-[1.875rem] bg-primary hover:bg-LightOrange px-[5rem] py-2 rounded-sm"
      >
        add comment
      </Button>
    </form>
  );
}
