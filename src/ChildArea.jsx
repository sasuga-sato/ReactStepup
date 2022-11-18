import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backGroundColor: "khaki"
};

// //Appからpropsを受け取る   childAreaをmemoで囲うことで、Propsに変更がない限り再レンダリングしないという意味
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリングされた！！");

  //   //2000件のデータを作る
  const data = [...Array(100).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
