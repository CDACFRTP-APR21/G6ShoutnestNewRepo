
export class shouts{
    // shoutId=models.AutoField(primary_key=True)
    // userId=models.ForeignKey(User,on_delete=models.CASCADE)
    userId:any;
    path:string
    caption:string
    type:any
    uploadDate:Date=new Date(Date.now()) 
    photoFileName:any
}