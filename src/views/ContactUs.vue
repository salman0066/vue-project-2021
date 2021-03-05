<template>
	<div>
		<h1>Contact Us</h1>
		<el-row>
			<el-col :offset="10" :span="12">
				<table>
					<tr>
						<td>Bilaal</td>
						<td><a href="https://teams.microsoft.com/l/chat/0/0?users=BILAAL.MUSA@stu.mmu.ac.uk">MSTeams</a></td>
						<td><a href="mailto:BILAAL.MUSA@stu.mmu.ac.uk">email</a></td>
					</tr>
					<tr>
						<td>Alex</td>
						<td><a href="https://teams.microsoft.com/l/chat/0/0?users=ALEX.BERRIDGE@stu.mmu.ac.uk">MSTeams</a></td>
						<td><a href="mailto:ALEX.BERRIDGE@stu.mmu.ac.uk">email</a></td>
					</tr>
					<tr>
						<td>Salman</td>
						<td><a href="https://teams.microsoft.com/l/chat/0/0?users=MUHAMMAD.S.KHAN5@stu.mmu.ac.uk">MSTeams</a></td>
						<td><a href="mailto:MUHAMMAD.S.KHAN5@stu.mmu.ac.uk">email</a></td>
					</tr>
					<tr>
						<td>Vikki</td>
						<td><a href="https://teams.microsoft.com/l/chat/0/0?users=VICTORIA.E.HANLEY@stu.mmu.ac.uk">MSTeams</a></td>
						<td><a href="mailto:VICTORIA.E.HANLEY@stu.mmu.ac.uk">email</a></td>
					</tr>
				</table>
			</el-col>
		</el-row>
	</div>
</template>
<script>

// import {ref} from 'vue';

export default {
  setup(){

  }
}
</script>

<style scoped>

table{
  margin:5px;
}

tr, td{
  padding-top:10px;
  margin:20px;
}
tr{
  box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
}
tr:nth-child(even){
  border-right:2px dotted grey;
}
tr:nth-child(odd){
  border-right:2px dotted grey;
}
</style>