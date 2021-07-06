from django.db import models

# Create your models here.


class User(models.Model):
      
      userId=models.AutoField(primary_key=True)
      userName=models.CharField(unique=True,max_length=100)
      emailId=models.EmailField(max_length=100)
      password=models.CharField(max_length=100)
      firstName = models.CharField(default='default',max_length=100)
      lastName = models.CharField(default='default',max_length=100)
      DateOfBirth = models.DateField(null=True)
      MobileNo = models.BigIntegerField( blank=True, null=True)
      profilePic=models.CharField(max_length=100,blank=True,null=True)

      #dob
      admin_verify=models.BooleanField(default=False)
      def __str__(self) -> str:
          return self.userName


class Shouts(models.Model):
    shoutId=models.AutoField(primary_key=True)
    userId=models.ForeignKey(User,on_delete=models.CASCADE)
   
    path=models.CharField(max_length=250,blank=True,null=True)
    caption=models.CharField(max_length=500,blank=True,null=True)
    type=models.CharField(max_length=100,blank=True,null=True)
    uploadDate=models.DateTimeField('upload_date')
    photoFileName=models.CharField(max_length=100,blank=True,null=True)
    def __str__(self) -> str:
          return self.caption

class Friends(models.Model):
    userId=models.ForeignKey(User,related_name='user_id',on_delete=models.CASCADE)
    friendId=models.ForeignKey(User,db_column='userId',related_name='friend_id',on_delete=models.CASCADE)
    status=models.IntegerField(default=1)
    #key=models.CharField(primary_key=True,)

class Reports(models.Model):
    reportId=models.AutoField(primary_key=True)
    userId=models.ManyToManyField(User)
    shoutId=models.ManyToManyField(Shouts)
    reason=models.CharField(max_length=500)









      




