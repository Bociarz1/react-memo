import React from "react";

function MemoComp({name}) {
  console.log("memo render")
  return ( 
    <>
      Memo {name}
    </>
   );
}

export default React.memo(MemoComp);
// export default MemoComp;
