var fig=["https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/how-to-draw-trees/draw-trees_fb-img_1200x800.jpg","https://cdn.shopify.com/s/files/1/0326/7189/articles/mother-trees-blog.jpg?v=1617381126","https://www.thespruce.com/thmb/6h_2kYh-vSo4R_ldYVDxt6ry1w0=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg","https://cdn.britannica.com/95/156695-131-FF89C9FA/oak-tree.jpg","https://ychef.files.bbci.co.uk/976x549/p07n19vr.jpg"];
var reas=["Trees provide shade","Trees protect Soil","Trees provide shelter for animals","Trees gives fruits","Some trees have medical value"];
var i=0;
function next()
{
    document.getElementById("reason").innerHTML=reas[i];
     document.getElementById("image").src=fig[i];
     document.getElementById("music").play();
    i++;
    if(i==4)
        {
            i=0;
        }
}
function previous()
{
    document.getElementById("reason").innerHTML=reas[i];
     document.getElementById("image").src=fig[i];
    i--;
    if(i<0)
        {
            i=4;
        }
}
function stop()
{
    document.getElementById("music").pause();
}
