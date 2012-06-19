import java.io.*;

public class compileTest{


	public static void main (String args[]){
		//System.out.println("Enter a squared number, else the number will be squared");

		BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
		int sqrt, sqr=0;
		double temp;



		try{
			//sqr = input.readLine();
			sqr=Integer.parseInt(args[0]);
		}catch(java.lang.ArrayIndexOutOfBoundsException e){
			System.out.println("No arguments specified");
			System.exit(1);
		}catch(java.lang.NumberFormatException e2){
			System.out.println("Not a number");
			System.exit(1);
		}


		sqrt = (int) Math.sqrt(sqr);

		if(sqr != sqrt*sqrt){
			sqrt = sqr;
			System.out.println("Not a square. Squaring "+sqrt+". ");
			sqr *= sqrt;
			System.out.print("Now "+sqr+" will be used to generate the box instead");
			System.out.println("");System.out.println("");System.out.println("");
		}	

		if(sqr > 100) {
				System.out.println("Number should be less than 100");
				System.exit(1);
			}

		for(int i=1; i<=sqr; ++i){
			if((i-1)%sqrt == 0) System.out.println("");
			if(i<=9) System.out.print(i+"  ");
			else System.out.print(i+" ");
		}
		System.out.println("");
	}
}