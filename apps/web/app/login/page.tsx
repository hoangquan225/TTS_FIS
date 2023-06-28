import Link from "next/link";
import { Button, Header } from "ui";
import LoginForm from "ui/components/LoginForm";

export default function Page() {
  // const handleLogin = (username, password) => {
  //   // alert("username: " + username + "\n" + "password: " + password)
  //   console.log('Đăng nhập với username:', username);
  //   console.log('Mật khẩu:', password);
  // };

  return (
    <>
      <LoginForm />
      <Link href="/">Back</Link>
    </>
  );
}
