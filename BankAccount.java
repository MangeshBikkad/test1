//4:Create java application for bank account handling.
//4.1. Create a class BankAccount -- acct no(int),customer name(string),balance(double)
// constr  to accept all details 
//
//4.2 Add Business logic methods
//Methods
//public void withdraw(double amt) 
//public void deposit(double amt)

public class BankAccount {

	private int actno;
	private String cname;
	public double balance;
	
	//accept info
	public void createAccount(int ano,String nm,double bal)
	{
		actno=ano;
		cname=nm;
		balance=bal;
	}
	public void withdraw(double amt)
	{		//BL
		
		balance=balance-amt;
		
		System.out.println(" Current Balanace after withdraw:"+balance);
	}
	public void deposite(double amt)
	{
		balance=balance+amt;
		System.out.println(" Current Balanace after deposite:"+balance);
		
	}

	
	public void showAccount()
	{
		System.out.println(actno+"  "+cname+"   "+balance);
	}
}






