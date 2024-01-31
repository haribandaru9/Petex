import React from 'react'
import './Admin.css';


const Admindashboard = () => {
  return (
    <div>
      <div>
        <section id="sidebar">
		<a href="#" class="brand">
			<i class='bx bxs-smile'></i>
			<span class="text">Adminblock</span>
		</a>
		<ul class="side-menu top">
			<li class="active">
				<a href="#">
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Dashboard</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-shopping-bag-alt' ></i>
					<span class="text">Offers</span>
				</a>
			</li>
      <li>
				<a href="./user">
					<i class='bx bxs-message-dots' ></i>
					<span class="text">User</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">Vendor</span>
				</a>
			</li>
      <li>
				<a href="#">
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">Doctors</span>
				</a>
			</li>
      <li>
				<a href="./Appointment">
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">Appoinments</span>
				</a>
			</li>
      <li>
				<a href="#">
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">Products</span>
				</a>
			</li>
		
			
      
    <li>
				<a href="./Feedbackform">
					<i class='bx bxs-group' ></i>
					<span class="text">User Feedback</span>
				</a>
			</li>
		
			<li>
				<a href="#" class="logout">
					<i class='bx bxs-log-out-circle' ></i>
					<span class="text">Logout</span>
				</a>
			</li>
		</ul>
	</section>

    <section id="content">
		
		<nav>
			<i class='bx bx-menu' ></i>
			<a href="#" class="nav-link">Categories</a>
			
			<a href="#" class="profile">
				<img src="img/people.png" alt=""/>
			</a>
		</nav>
		

		
		<main>
			<div class="head-title">
				<div class="left">
					<h1>Dashboard</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Home</a>
						</li>
					</ul>
				</div>
			</div>

			


			<div class="table-data">
				<div class="order">
					<div class="head">
						<a href=""><h3>Orders Recieved</h3></a>
						
					</div>
					<table>
						<thead>
							<tr>
								<th>Order id</th>
								<th>customer name</th>
								<th>Product</th>
								<th>Status</th>

							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									
									<p>001</p>
								</td>
								<td>hari</td>
								<td>Food item of a dog</td>
								<td><span class="status completed">Completed</span></td>
							</tr>
							<tr>
								<td>
									
									<p>002</p>
								</td>
								<td>hari</td>
								<td>food item a cat</td>
								<td><span class="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
									
									<p>003</p>
								</td>
								<td>hari</td>
								<td>Cloth item of a dog</td>
								<td><span class="status process">Process</span></td>
							</tr>
							<tr>
								<td>
									
									<p>004</p>
								</td>
								<td>hari</td>
								<td>food item of a dog</td>
								<td><span class="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
									
									<p>005</p>
								</td>
								<td>food item of a dog</td>
								<td><span class="status completed">Completed</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				
			</div>
		</main>
		
	</section>
    </div>
    </div>
  )
}

export default Admindashboard