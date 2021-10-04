import java.io.*;

import java.lang.*;

class Wrapper
{
        public static void main(String args[])throws Exception
        {
                DataInputStream in = new DataInputStream(System.in);

                String ans;

                int i,ch;

                do
                {
                
                System.out.println("\n***** MENU *****");

                System.out.println("1.FLOAT AND DOUBLE");

                System.out.println("2.BYTE, SHORT, INTEGER, LONG");

                System.out.println("3.CHARACTER");

                System.out.println("4.BOOLEAN");

                System.out.print("\nENTER YOUR CHOICE (1-4) : ");

                ch = Integer.parseInt(in.readLine());

                switch (ch)
                {
                        case 1:
                                float f1 = Float.parseFloat("4.5");

                                Float f2 = new Float(4.0005d);

                                Float f3 = new Float(1.5555f);

                                Double d1 = new Double(1/0.);

                                Double d2 = new Double(0/0.);

                                Double d4 = new Double(3.14159);

                                Double d5 = new Double("314159E-5");

                                System.out.println("VALUE OF F1 : "+f1);

                                System.out.println("VALUE OF F2 : "+f2);

                                System.out.println("VALUE OF F3 : "+f3);

                                System.out.println(d1 + " : " + d1.isInfinite() + ", " + d1.isNaN());

                                System.out.println(d2 + " : " + d2.isInfinite() + ", " + d2.isNaN());

                                System.out.println(d4 + " = " + d5 + " -> " + d4.equals(d5));

				break;

			case 2:
				int num = 19648;

				System.out.println(num + " in binary: " + Integer.toBinaryString(num));

				System.out.println(num + " in octal: " + Integer.toOctalString(num));

				System.out.println(num + " in hexadecimal: " + Integer.toHexString(num));

				BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
				
				String str;

                                int sum=0;

				System.out.println("Enter numbers, 0 to quit.");

				do
				{
					str = br.readLine();
					
					try
					{
						i = Integer.parseInt(str);
					}
					
					catch(NumberFormatException e) 
					{
						
						System.out.println("Invalid format");

						i = 0;
					}
					
					sum += i;

					System.out.println("Current sum is: " + sum);
				
				} while(i != 0);

				break;

			case 3:
				char a[] = {'a', 'b', '5', '?', 'A', ' '};
				
                                for(i=0; i<a.length; i++) 
				{
					if(Character.isDigit(a[i]))

					System.out.println(a[i] + " is a digit.");

					if(Character.isLetter(a[i]))

					System.out.println(a[i] + " is a letter.");

					if(Character.isWhitespace(a[i]))

					System.out.println(a[i] + " is whitespace.");

					if(Character.isUpperCase(a[i]))
	
					System.out.println(a[i] + " is uppercase.");

					if(Character.isLowerCase(a[i]))	

					System.out.println(a[i] + " is lowercase.");
				}
				
				break;

			case 4:
                                Boolean aa = new Boolean("TRUE");
				
				Boolean b = new Boolean(false);
			
                                System.out.println("1 : "+aa.booleanValue());

				System.out.println("2 : "+b.booleanValue());

                                if(aa.equals(b))
				{
					System.out.println("Both Equal");
				}

				else
				{
					System.out.println("Both ot Equal");
				}


                                System.out.println("String : "+aa.toString());

				System.out.println("Code   : "+b.hashCode());

				break;

                        default:

                                System.out.println("CHOICE IS WRONG");

                                System.out.println("PLEASE ENTER CHOICE (1-4) : ");

				break;
                }

                System.out.println("DO YOU WANT TO CONTINUE (Y/y) : ");

                ans = in.readLine();

                }while(ans.charAt(0)=='Y' || ans.charAt(0)=='y');
        }
}
