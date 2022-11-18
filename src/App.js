import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  //inputの値が変更されたら受け取ってStateで変更
  const onChangeText = (e) => setText(e.target.value);
  //クリック時にstateの真偽値を変更
  const onClickOpen = () => setOpen(!open);

  //アロー関数はレンダリング毎に新規に関数を生成していると判定されるのでプロップス更新される。
  // 処理が変わらない場合は同じものを使いまわすようにしたいので、useCallCackを指定する。
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  //変数自体のメモ化　変数の中身が複雑化している際に使うことがある　配列の中にある
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
