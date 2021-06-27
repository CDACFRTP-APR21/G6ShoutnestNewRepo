

export class user
{
    // userId
    //   userName=models.CharField(max_length=100)
    //   emailId=models.EmailField(max_length=100)
    //   password=models.CharField(max_length=100)
    //   #dob
    //   admin_verify=models.BooleanField(default=False)

    userName:string
    emailId:any=null
    password:any
    firstName :string=""
    lastName :string=""
    DateOfBirth :Date=new Date(Date.now());
    MobileNo :any=null
    profilePic:any=null

   
    admin_verify:boolean=false

    constructor(userName:any,password:any)
    {
        this.userName=userName
        this.password=password
    }

   
}