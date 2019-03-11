function goods()
{
	console.log("");
	
	var items = document.querySelectorAll('.b-goods__items .b-goods-item');

	for (var i=0; i<items.length; i++)
	{     
		/* click good */
		items[i].addEventListener('click', function(e)
		{
			var classes = this.classList;
			
			if(e.target.className != 'b-goods-item__desc-in')
			{
				if(!classes.contains("b-goods-item__disabled"))
				{
					if(classes.contains("b-goods-item__hover"))
					{
						classes.remove("b-goods-item__hover");
					}
					
					if(classes.contains("b-goods-item__selected"))
					{
						classes.remove("b-goods-item__selected");
					}
					else
					{
						this.className = this.className + ' b-goods-item__selected';
					}
				}
			}
			e.preventDefault();
		}, false);
		
		
		/* mouseover good */
		items[i].addEventListener('mouseenter', function(e) {
			var classes = this.classList;
		  
			if(e.target.className != 'b-goods-item__desc-in' && e.target.className != 'b-goods-item__buy') {
				if(!classes.contains("b-goods-item__disabled")) {
					this.className = this.className + ' b-goods-item__hover';
				}
			}
			e.preventDefault();
		}, false);
		
		
		/* mouseout good */
		items[i].addEventListener('mouseleave', function(e)
		{
			var classes = this.classList;
		  
			if(e.target.className != 'b-goods-item__desc-in' && e.target.className != 'b-goods-item__buy') {
				if(!classes.contains("b-goods-item__disabled")) {
					classes.remove("b-goods-item__hover");
				}
			}
			e.preventDefault();
		}, false);

	};
};
 
export default goods;