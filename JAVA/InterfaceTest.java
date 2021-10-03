//Title : Program based on multiple inheritance to demonstrate the use of interface

import java.io.*;
interface Area
{
  final static float pi=3.14f;
  float compute(float x,float y);
}

class Rectangle implements Area
{
  public float compute(float x,float y)
  {
     return(x*y);
  }
}

class Circle implements Area
{
  public float compute(float x,float y)
  {
     return(pi*x*y);
  }
}

class InterfaceTest
{
   public static void main(String args[])
   {
      Rectangle rect=new Rectangle();
      Circle ci=new Circle();
      System.out.println("Area of rectangle " +rect.compute(10,20));
      System.out.println("Area of circle " +ci.compute(10,5));
   }
}

