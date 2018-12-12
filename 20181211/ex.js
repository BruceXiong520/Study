var arr=[];
for(var i=0;i<=10;i++){
	arr[i]=Math.floor(Math.random()*11);
		for(var i=0;i<=10;i++){
			for(var j=i+1;j<=10;j++){
					if(arr[i]=arr[j]){
						arr.splice(j,1);
						j--;
					}
			}
	}console.log(arr);
}


