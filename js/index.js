/**
 * Created by SamSung on 2018/1/13.
 */
var oBan=document.getElementById("banner");
var oContent=document.getElementById("content");
var oA=oContent.getElementsByTagName("a");
var oPrev=document.getElementById("prev");
var oNext=document.getElementById("next");
var iNow=0;//记录当前显示

oPrev.onclick=function()
{
    iNow--;
    console.log(iNow);
    if(iNow==-1)
    {
        iNow=oA.length-1;
    }
    for(var j=0;j<oA.length;j++)
    {
        oA[j].className ="";
    }
    oA[iNow].className = "selected";
};
oNext.onclick=function(){
    iNow++;
    if(iNow==oA.length){
        iNow=0;
    }
    for(var j=0;j<oA.length;j++)
    {
        oA[j].className="";
    }
    oA[iNow].className="selected";
}







