*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family:Arial, sans-serif;
  background:#0f1117;
  color:white;
  height:100vh;
  transition:0.3s;
}

.container{
  display:flex;
  height:100vh;
}

.editor-section,
.preview-section{
  width:50%;
  padding:25px;
  overflow-y:auto;
}

.editor-section{
  background:#161b22;
  border-right:1px solid #333;
}

.preview-section{
  background:#0f1117;
}

.topbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
}

textarea{
  width:100%;
  height:90%;
  background:transparent;
  border:none;
  outline:none;
  resize:none;
  color:white;
  font-size:17px;
  line-height:1.8;
  font-family:Consolas, monospace;
}

#preview{
  line-height:1.8;
  font-size:18px;
}

#preview h1{
  font-size:42px;
  margin-bottom:20px;
}

#preview h2{
  margin-bottom:15px;
  margin-top:20px;
}

#preview strong{
  color:#58a6ff;
}

#preview em{
  color:#ff7b72;
}

#preview code{
  background:#21262d;
  padding:4px 8px;
  border-radius:6px;
}

.switch{
  position:relative;
  width:60px;
  height:30px;
}

.switch input{
  display:none;
}

.slider{
  position:absolute;
  inset:0;
  background:#444;
  border-radius:30px;
  cursor:pointer;
}

.slider::before{
  content:"";
  position:absolute;
  width:24px;
  height:24px;
  background:white;
  border-radius:50%;
  top:3px;
  left:3px;
  transition:0.3s;
}

input:checked + .slider{
  background:#58a6ff;
}

input:checked + .slider::before{
  transform:translateX(30px);
}

/* LIGHT MODE */

body.light{
  background:#f4f4f4;
  color:#111;
}

body.light .editor-section{
  background:white;
}

body.light .preview-section{
  background:#f4f4f4;
}

body.light textarea{
  color:#111;
}

body.light #preview code{
  background:#ddd;
}
