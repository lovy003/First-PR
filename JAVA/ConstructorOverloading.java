
import java.io.*;
import java.lang.*;
class Box
{
     
      double width;
      double height;
      double depth;
      Box()
       {
            width=2;
            height=3;
            depth=1;
       }

       Box(double len)
       {
          width=height=depth=len;
       }

      Box(double w, double h, double d)
       {
          width=w;
          height=h;
          depth=d;
       }

      double volume() 
      {
         return (width*height*depth);

      }
}
class ConstructorOverloading
{
   public static void main(String args[ ])
   {
      double vol;
       {
          Box mybox1=new Box();
          Box mycube=new Box(7);
          Box mybox2=new Box(2,3,4);

          vol=mybox1.volume();
          System.out.println("Volume of mybox1:"+vol);

          vol=mycube.volume();
          System.out.println("Volume of mycube:"+vol);

           vol=mybox2.volume();
           System.out.println("Volume of mybox2:"+vol);
      
   }
}
