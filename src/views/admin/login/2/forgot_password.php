
<div class="login-form">
<div class="row">
              
			  <div class="col-sm-12 col-md-12 ">
				  <div class="">
				  <?php
					if($this->session->flashdata("user_msg")){
					?>
					<div class="alert alert-success font-weight-bold">
						<strong>
							<?php echo $this->session->flashdata("user_msg");?>
						</strong>
					</div>
					<?php
					}
					?>
					<?php
					if($this->session->flashdata("email_match")){
					?>
					<div class="alert alert-danger font-weight-bold">
						<strong>
							<?php echo $this->session->flashdata("email_match");?>
						</strong>
					</div>
					<?php
					}
					?>
				 </div>
			 </div>
             
 </div>
		 <h1>Forgot</h1>
		 <form method="post" autocomplete="off">
		 <div class="form-group log-status">
		 
		   <input type="email" class="form-control" name="email" placeholder="Enter Email Address " id="email" required>
		   <i class="fa fa-user"></i>
		  <?php echo form_error("email", "<p class='text-danger mb-0 text-left'>", "</p>");?>
		 </div>
		
		 
		 <input type="submit" name="forgot" class="log-btn"  value="Submit" />
		 </form>
		 <P><a class="link" href="<?php echo base_url('admin/login/login');?>">Back To Login</a></P>
    
   </div>