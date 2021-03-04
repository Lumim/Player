<div class="login-form">
		 <h1>Reset</h1>
		 <form method="post" autocomplete="off">
		 <div class="form-group log-status">
		 
		   <input type="password" class="form-control" name="new_password" placeholder="Enter New Passwod " id="new_password">
		   <i class="fa fa-user"></i>
		  <?php echo form_error("new_password", "<p class='text-danger mb-0 text-left'>", "</p>");?>
		 </div>
		 <div class="form-group log-status">
		 
		   <input type="password" class="form-control" name="confirm_password" placeholder="Enter Confirm Password" id="confirm_password">
		   <i class="fa fa-lock"></i>
		  <?php echo form_error("confirm_password", "<p class='text-danger mb-0 text-left'>", "</p>");?>
		 </div>
		 <input type="submit" name="reset" class="log-btn" value="Update" />
		 
		 </form>
		 <P><a class="link" href="<?php echo base_url('admin/login/login');?>">Back To Login</a></P>
    
   </div>