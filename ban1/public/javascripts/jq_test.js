
$(function(){
    $("#nextPage").click(function(){
    
        $.ajax({
            type:"post",
            url:"/nextpage/", 
            success:function(q){
                console.log(q);
               
                document.getElementById("showdata").innerHTML =q.map((i,ind)=>
                `
                <tr>
                <td>${i.name}</td>
                <td>${i.s1}</td>
                <td>${i.s2}</td>
                <td>${i.s3}</td>
                <td><%=+o.s1+ +o.s2+ +o.s3 %></td>
            <td>
                <input data-id=${ind} type="button" value="删除" class="del_button">
                <input data-id=${ind} type="button" value="修改" class="upd_button">
            </td>
            </tr>
                `).join("");
            }
        });
    });
});