Ext.define('AM.view.master.report.project.WorkCategory', {
    extend: 'Ext.Container',
    alias: 'widget.masterreportprojectWorkCategoryReport',

		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		header: false, 
		headerAsText : false, 
		
		initComponent: function(){
			var me = this; 
			// me.buildToolbar();
			
			// console.log("init component of masterreportprojectWorkCategoryReport");
			
			this.items = [  {
				xtype : 'masterreportprojectList',
				// xtype : 'container',
				// html : "Awesome shite",
				flex: 2 
			},
			me.buildChartInspect() ];
			
	    this.callParent(arguments);
		},
		
	 
		
		buildChartInspect: function(){
			// console.log("build Chart Inspect called");
			return {
					xtype : "chartInspect",
					chartStoreFields : [
						'name',
						'data1',
						'id'
					],
					chartStoreUrl :  'api/work_category_reports', 
					listXType: 'workcategoryList',
					yAxisLabel : "Time Spent (mins)",
					xAxisLabel : "Category",
					panelTitle: "Category",
					flex: 7,
					chartListWrapperXType: 'masterreportprojectWorkCategoryReport',
					autoChartLoad: false 
				} 
		},

 		
});
