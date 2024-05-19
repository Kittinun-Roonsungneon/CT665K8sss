link หน้าเว็บ <br>
http://20.247.136.29/
<br>
ลิ้ง docker image <br>
https://hub.docker.com/r/kittitnun/65130695ct665/tags
<br>
ขั้นตอนการ Deploy <br>
1.เตรียมไฟล์ใน github นี้ <br>
##docker <br>
1.docker login <br>
2.run docker build -t kittitnun/65130695ct665 . <br>
3.run docker push kittitnun/65130695ct665 <br>
##run terminal Power Shell <br>
1 -> az login <br>
2 -> az group create --name myResourceGroup --location southeastasia <br>
3 -> az aks create --resource-group myResourceGroup --name myAKSCluster --node-count 2 --generate-ssh-keys <br>

## เข้า azure k8s cluster ->  Apply yaml <br> รอจนเสร็จ
1 เข้า k8s cluster -> Services and ingresses ดูที่ backend เลือก ip จะเป็นหน้าเว็บที่เรารัน
