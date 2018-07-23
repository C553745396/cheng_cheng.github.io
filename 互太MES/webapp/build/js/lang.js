// (function(){
var di18n = new DI18n({
  //修改参数  
  // locale: sessionStorage.loginType,
  locale: 'cn',
  isReplace: true,
  messages: {
    en: {
      //登錄
      '用戶': 'user',
      '密碼': 'password',
      '登錄': 'login',
      '請選擇語言': 'choose language',
      //index
      '登出': 'Sign out',
      '取消': 'cancel',
      '提交': 'submit',
      '删除': 'delete',
      '重設': 'reset',
      '搜尋': 'search',
      '搜索': 'search',
      '編輯': 'edit',
      '经 编': 'warp knitting',
      '經編織胚工單派工': 'Warp knitting embryo work orders',
      '纬 编': 'weft knitting',
      '緯編機台調校參數概覽': 'Overview of tuning parameters of weft knitting machine',
      //dispatching
      '預計開機臺數': 'plan amount',
      '實際開機臺數': 'actual amount',
      '創建人': 'creator',
      '工單創建日期': 'date created',
      '工單號碼': 'workorder number',
      '布號': 'cloth num',
      '銷售訂單號碼': 'sales number',
      '備胚備胚單號': '??? number',
      '客戶':  'client',
      '胚期': 'embryonic stage',
      '工作中心組': 'working group',
      '織胚數量': 'weaving embryo number',
      '已織胚數量': 'woven embryo number',
      '剩餘織胚數量': 'remaining embryo number',
      '物料': 'materials',
      '盤頭描述': 'description',
      '備註信息': 'postscript',
      '保存': 'save',
      '打印領盤頭單': 'print the lead sheet',
      '打印布票': 'print clothing',
      '打印機頭紙': 'printer head paper',
      '機頭紙創建日期': 'date created',
      '報工數量': 'work number',
      '工作中心': 'work center',
      '排程日期': 'Schedule Date',
      //jobBooking
      '整经盘头质检报工': 'pan head quality inspection',
      '生産訂單號': 'Production order number',
      '盤頭物料號': 'Plate number',
      '盤頭型號': 'Pan head type',
      '紗線物料號': 'Yarn number',
      '紗線批次號': 'Yarn batch no',
      '紗商批次': 'Yarn, batch',
      '盤頭個數': 'Pan head number',
      '紗線頭數': 'Yarn capita',
      '紗線要求米長': 'Yarn required meters long',
      '上紗時間': 'Yarn on time',
      '單/雙貼': 'Single/double stick',
      '穿紗方式': 'Wear gauze way',
      '盤頭內週': 'Pan head within periphery',
      '非彈性紗張力': 'Non-elastic yarn tension',
      '彈性紗張力': 'Elastic yarn tension',
      '機速': 'machine speed',
      '整經開始時間': 'Start time',
      '整經結束時間': 'End time',
      '紗線生産日期': 'Yarn production date',
      '毛羽靈敏度': 'Feather sensitivity',
      '彈性紗齒輪比': 'Elastic yarn gear ratio',
      '最終牽伸': 'The final draft',
      '損耗': 'wastage',
      '盤頭序號': 'Pan head serial number',
      '盤頭條碼': 'Pan head barcode',
      '盤頭編碼': 'Pan head coding',
      '盤頭操作者': 'Pan head controller',
      '盤頭生産時間': 'Pan head production time',
      '米長': 'metre long',
      '轉數': 'revolution',
      '顯示外周': 'According to the peripheral',
      '實測外周': 'The measured peripheral',
      '硬度': 'hardness',
      '實測張力': 'The measured tension',
      '單個': 'single',
      '毛羽': 'hairiness',
      '停機次數': 'downtimes',
      '斷紗次數': 'Broken yarn number',
      '加油量': 'fuel charge',
      '橫移寬度': 'shifting width',
      '此組毛羽匯總': 'Hairiness summary',
      '此組停機匯總': 'Downtime summary',
      '此組斷紗匯總': 'Yarn breakage summary',
      '硬度平均值': 'Hardness average',
      '實測張力平均值': 'Average measured tension',
      '盤頭毛重': 'Pan head gross weight',
      '盤頭淨重': 'Pan head net weight',
      '盤頭總重': 'Pan head total weight',
      '紗線實際旦數': 'Actual number of yarn',
      '毛羽指數': 'hairiness index',
      '工單備注': 'The repair order note',
      '質檢備注': 'Quality inspection note',
      '開機確認項目': 'Boot confirmation project',
      '第一個盤頭': 'First pan head',
      '上紗頭數是否正確': 'check in on yarn capita',
      '紗路正確': 'Yarn road right',
      '紗架或木板無廢紗': 'Yarn frame or board without waste yarn',
      '分紗針無磨損': 'No wear and tear on the thread',
      '齒輪比是否正確': 'The gear ratio is correct',
      '設置PIV': 'set PIV',
      '測紗線張力': 'Yarn tension',
      '參數輸入正確': 'Parameter input correct',
      '確認人': 'Identifying people',
      '第二個盤頭': 'Second pan head',
      '第三個盤頭': 'Third pan head',
      '第四個盤頭': 'Fourth pan head',
      '第五個盤頭': 'Fifth pan head',
      '第六個盤頭': 'Sixth pan head',
      '第七個盤頭': 'Seventh pan head',
      '第八個盤頭': 'Eighth pan head',
      '暫存': 'temporary storage',
      '報工': '',
      '打印整經盤頭票': '',
      '打印整經工單盤頭入倉單': '',
      //touModelMaintenance
      '盘头型号维护': 'Disk type maintenance',
      '盤頭列表':'Pan head list',
      '盤頭編號':'Pan head num',
      '盤頭條號':'Pan head article no',
      '空盤頭重量':'Blank weight',
      '盤週':'',
      '備註':'remark',
      '編輯人':'editor',
      '编机时间':'Knitting machine date',
      //parameterGeneralization
      '緯編機台調校參數概覽':'Weft_Knitting Machine_ParaInfo_Overview',
      '物料号':'Material Number',
      '机器种类':'Machine Type',
      '卷机号':'Volume number',
      
      '生产机号':'The production immediately',
      '针长度':'The length of the needle',
      '时间差 针织/G':'Time difference knitting /G',
      '布宽':'Fabric width',
      '筒盘距':'Sieve tray is apart from the',
      'CROSSING单位':'CROSSING the unit',
      '已确认':'Confirmed',
      '有化纖標識':'Chemical fiber identification',
      '标准WPI边5':'Standard WPI edge 5',
      '标准WPI中':'The standard WPI',
      '标准WPI边10':'Standard WPI edge 10',
      '布撑长度':'Cloth brace length',
      '布弓宽度':'Cloth arch width',
      '布弓深度':'Cloth deep bow',
      '布棍齿':'Cloth rod tooth',
      '松布封度':'Loose fabric closure degree',
      '纤维高':'High fiber',
      '喂纱器高':'Hello yarn machine high',
      '张力':'tension',
      '粗调':'coarse',
      '细调':'Fine tuning',
      '微调':'fine-tuning',
      '布撑CPI左':'Cloth hold the CPI left',
      '布撑CPI中':'In the cloth through the CPI',
      '布撑CPI右':'Cloth hold the CPI right',
      '卷布棍CPI左':'Roll stick CPI left',
      '卷布棍CPI中':'Roll stick CPI',
      '卷布棍CPI右':'Roll stick CPI right',
      '松布CPI':'Loose fabric CPI',
      '布撑WPI左':'Cloth through WPI left',
      '布撑WPI中':'Cloth through WPI',
      '卷布棍WPI左':'Roll bar WPI left',
      '卷布棍WPI中':'In WPI, WPI',
      '卷布棍WPI右':'Roll stick WPI right',
      '松布WPI':'Loose fabric WPI',
      'TIM布料编码':'TIM fabric coding',
      '布框版本':'Cloth box version',
      '绒头长度':'The length of the pile',
      '主齿轮':'The main gear',
      '卷布棍驱':'Cloth rod drive',
      '卷布表面CPI':'Roll surface CPI',
      '理论 RPM/LB值':'Theory of RPM/LB',
      '创建人':'founder',
      '创建时间':'Creation time',
      '最近修改人':'Recent modifier',
      '最近修改时间':'Recent modification time',
//    '盘调':'steel wire',
      '編輯時間':'edit session',
      '包含':'include',
      '等於':'equal to',
      '開始於':'begin with',
      '不開始於':'bn',
      '不包含':'exclusive',
      '結束於':'end with',
      '不結束於':'Not end the',
      '空盤頭重量:请输入有效数字':'Empty weight Pan: Please enter a valid number',
		  '盤週:请输入有效数字':'Week: Please enter a valid number',
		  '无法获取盤頭編號':'Unable to get the head number',
		  '无法获取盤頭條號':'Unable to get a head',
		  '无法获取空盤頭重量':'Unable to get the weight of empty head',
		  '无法获取盤週':'Unable to get weekly',
		  '无法获取編輯人':'Unable to obtain editors',
		  '无法获取編輯時間':'Unable to get edit time',
		  '盤週:请输入有效数字':'Week: Please enter a valid number',
		  '删除成功':'Delete success',
		  '请选择删除行':'Please select the delete line',
		  '搜索不能为空':'Search can not be empty',
		  '你确定删除吗':'Are you sure to delete',
	  
      //shiteTable
      '導出':'export',
		  '經編整經交班表維護報表':'Warp knitting shift table maintenance report',
		  '預覽':'preview',
		  '打印':'Print',
		  '查看整經產量報表':'View the whole production report',
		  '工單<br>狀態':'Work list <br> state',
		  '生產<br>序號':'Production of <br> serial number',
		  '盤頭<br>料號':'Pan head material',
		  'Creel<br>No':'Creel No',
		  '盤頭工<br>單號':'Pan head work order',
		  '盤頭<br>批次':'Pan head batch',
		  '紗線<br>料號':'Yarn number',
		  '盤頭<br>個數':'The number of head',
		  '紗線<br>頭數':'Yarn head number',
		  '長度<br>(m)':'Length',
		  '紗線<br>批次':'Yarn batch',
		  '耗時<br>(H)':'Time',
		  '預計開始<br>生產時間':'Expected start production time',
		  '機<br>速':'machine speed',
		  '預計產<br>出時間':'Expected output time',
		  '預計<br>產量':'Expected output',
		  '預計<br>旦數':'Expected denier number',
		  '紗線預<br>留號':'Yarn reservation number',
		  '排程<br>日期':'Schedule Date',
		  '工單狀態':'State of work',
		  '生產序號':'Production serial number',
		  '盤頭料號':'Pan head material',
		  '盤頭工單號':'Pan head work order',
		  '盤頭批次':'Pan head batch',
		  '紗線料號':'Yarn number',
		  '盤頭個數':'The number of head',
		  '紗線頭數':'Yarn head number',
		  '長度':'Length',
		  '紗線批次':'Yarn batch',
		  '耗時':'Time',
		  '預計開始生產時間':'Expected start production time',
		  '預計產出時間':'Expected output time',
		  '預計產量':'Expected output',
		  '預計旦數':'Expected denier number',
		  '紗線預留號':'Yarn reservation number',
		  '拉架':'Lycra',
		  '尼龍':'Nylon',
		  '總產量':'Total output',
		  '请选择日期':'Please choose date',
		  '提示':'Prompt',
		  '请选中再编辑':'Please select the  Edit',
		  '工作中心不存在':'work center does not exist',
	  
      //causeMaintenance
      '緯編質量維護':'weft Quality Maintenance',
      '代碼':'Code',
      '描述':'describe',
      '新增':'Newly added',
			'编辑':'Edit',
			//standardMaintenance.html
			'上傳完畢':'Upload finished',
			'"第"+String(i-1)+"条有重复，本条插入失败，確定繼續提交':'The article is repeated, the insert fails, and it is determined to continue submitting',
			'上傳中。。。。。。':'Upload',
			'编辑記錄':'Edit record',
			'无法获取封度容差参数':'Unable to obtain the seal tolerance parameter',
			'无法获取标准封度参数':'Standard seal parameters cannot be obtained',
			'无法获取标准WPI中容差参数':'Tolerance parameters in standard WPI can not be obtained',
			'无法获取标准WPI中参数':'Unable to obtain parameters in standard WPI',
			'无法获取标准WPI边10容差参数':'The standard WPI side 10 tolerance parameters can not be obtained',
			'无法获取标准WPI边10参数':'Unable to obtain standard WPI side 10 parameters',
			'无法获取标准WPI边5容差参数':'The standard WPI side 5 tolerance parameters can not be obtained',
			'无法获取标准WPI边5参数':'Unable to obtain standard WPI side 5 parameters',
			'无法获取CPI容差参数':'CPI tolerance parameters can not be obtained',
			'无法获取标准CPI参数':'Unable to obtain standard CPI parameters',
			'无法获取总针数参数':'Total number of needles can not be obtained',
			'无法获取模数参数':'Unable to obtain modulus parameters',
			'无法获取机型参数':'Model parameters can not be obtained',
			'无法获取物料号参数':'Material number parameters can not be obtained',
			'请选中参数为空':'Please select the parameters to be empty',
			'新增記錄':'New record',
			'编辑日期':'Edit date',
			'编辑人':'Editor',
			'封度容差':'Sealing tolerance',
			'标准封度':'Standard seal',
			'标准WPI中容差':'Tolerance in standard WPI',
			'标准WPI中':'Standard WPI',
			'标准WPI边10容差':'Standard WPI side 10 tolerance',
			'标准WPI边10':'Standard WPI side 10',
			'标准WPI边5容差':'Standard WPI side 5 tolerance',
			'标准WPI边5':'Standard WPI side 5',
			'CPI容差':'CPI tolerance',
			'标准CPI':'Standard CPI',
			'总针数':'Total number of needles',
			'模数':'modulus',
			'机型':'Model',
			'WPI改善':'WPI improvement',
			'條記錄':'Bar record',
			'共上傳':'Co upload',
			'全部顯示':'All display',
			'数据同步':'Data synchronization',
			'检验标准维护界面':'Inspection standard maintenance interface',
			'纬编胚布质检标准维护':'Maintenance of quality inspection standard for weft knitted fabric',
			//productionReport.html
			'機台生產狀態查詢':'Table production status query',
			'執行':'Executive',
			'Excel':'Excel',
			'工廠':'Factory',
			'顯示已完成工單':'Display the completed work list',
			'物料分組':'Material Grouping',
			'控制者':'Controller',
			'生產調度員':'Production dispatcher',
			'工單数量':'Number of work orders',
			'确认数量':'Confirmation number',
			'报废数量':'Scrap number',
			'待生产数':'Number of products to be produced',
			'總計':'total',
			'销售单号':'Saleno',
			'布号':'Cloth No.',
			'针数':'The number of needle',
			'寸数':'Inch',
			'用纱描述':'Yarn description',
			'齐胚日期':'Homogenous date',
			'成品交期':'Delivery date',
			'纱长':'Yarn length',
			'胚布深中浅':'Shallow middle shallow',
			'工单状态':'State of work',
			'重量':'weight',
			'品质评级':'Quality rating',
			'批次':'batch',
			'入仓日期':'Date of loading',
			'胚布缸號':'Embryo cloth cylinder number',
			//greigeJobBooking.html
			'经编胚布报工':'Warp knitted embryo cloth newspaper worker',
			'工單號碼':'Work number',
			'盘头批次':'Pan head batch',
			'生產機號':'Production machine number',
			'匹号':'Horse No.',
			'炮車編碼':'Paoche encoding',
			'胚布WPI(左)':'Embryo cloth WPI (left)',
			'機臺人員':'Platform personnel',
			'炮車條碼':'The bar code',
			'胚布WPI(中)':'Embryo cloth WPI (middle)',
			'開始時間':'Start time',
			'炮車重量':'The weight of artillery',
			'胚布WPI(右)':'Embryo cloth WPI (right)',
			'胚布毛重(KG)':'Embryo cloth gross weight (KG)',
			'胚布净重(KG)':'Net weight of embryo cloth (KG)',
			'胚布':'Cloth',
			'报工日期/时间':'Date / time',
			'胚布封度':'胚布封度',
			'报工':'Daily work',
			'必须是整数且小于1000':'Must be an integer and less than 1000',
			'輸入的布票號碼不存在':'The input supply number does not exist',
			'布票號碼':'Supply number',
			'工单已报工':'The work list has been reported to work',
			'沒有數據':'No data',
			'请输入必输欄位':'Please enter the must lose field',
			'淨重量必須大於等於零':'The net weight must be larger than zero',
      //weftPersonnelMaintenance
      '纬编质检人员维护':"Maintenance of weft quality inspection personnel",
      '驗布工號':"Cloth inspection work number",
      '修改密碼':"Change the password",
      '工号':"work number",
      '姓名':"name",
      '审批权限':"The examination and approval authority",
      '膠管重量最小值':"The minimum weight of the hose",
      '膠管重量最大值':"The maximum weight of the hose",
      '工号姓名':'Gonghaowu name',
      '請選擇刪除行':'Select delete row',
      '<span>你确定删除吗？</span>':'Are you sure to delete it?',
      '请选择编辑行':'Select edit row',
      '请输入密码':'Please enter password',
      '请选择修改行':'Please select modify row',
      //useRatio
      '圆機布票使用倍率':'Round machine ticket use multiplier',
      '分配织胚数量(公斤)':'Number of weavers (kg)',
      '分配织胚数量':'Allocates the number of weavers',
      '布票使用倍率':'The use of cloth tickets is multiplied',
      '分配织胚数量(公斤)':'Allocates the number of weavers(kg)',
      '新增...':'Newly added...',
      '确定':'determine',
      //matchingUnlocking
      '緯編質檢匹號解鎖':'The filling of the weft - woven quality check',
      'F8-解鎖':'F8 - unlock',
      '胚布批次':'Grey fabric batches'
    },
    cn: {

    },
    vn: {
      '用戶': 'Người dùng',
      '密碼': 'Mật mã',
      '登錄': 'Đăng nhập',
      '請選擇語言': 'Chọn ngôn ngữ',
      '登出': 'Đăng xuất',
      '经 编': 'Đan Warp',
      '經編織胚工單派工': 'Warp dệt kim phôi làm việc đơn đặt hàng',
      '纬 编': 'Vạt',
      '緯編機台調校參數概覽': 'Thông số điều chỉnh máy tiện',
      '預計開機臺數': 'Số lượng khởi động ước tính',
      '實際開機臺數': 'Số máy thực tế',
      '創建人': 'Được tạo bởi',
      '工單創建日期': 'Ngày tạo vé',
      '工單號碼': 'Số vé',
      '布號': 'Số vải',
      '銷售訂單號碼': 'Số đơn đặt hàng bán hàng',
      '備胚備胚單號': 'Chuẩn bị phôi cho phôi số đơn',
      '客戶':  'Khách hàng',
      '胚期': 'Thời kỳ phôi',
      '工作中心組': 'Nhóm làm việc trung tâm',
      '織胚數量': 'Số phôi',
      '已織胚數量': 'Số phôi đã được phôi',
      '剩餘織胚數量': 'Số phôi còn lại',
      '物料': 'Vật liệu',
      '盤頭描述': 'Mô tả đầu Pan',
      '備註信息': 'Thông tin ghi chú',
      '保存': 'Lưu lại',
      '打印領盤頭單': 'In danh sách lãnh đạo',
      '打印布票': 'Vé vải in',
      '打印機頭紙': 'Giấy in báo',
      '機頭紙創建日期': 'Giấy tạo ngày đầu',
      '報工數量': 'Số lượng báo công',
      '工作<br>中心': 'Số lượng báo công'
    }
  }
})

//兼容
if ( !Array.prototype.forEach ) {
    Array.prototype.forEach = function forEach( callback, thisArg ) {
        var T, k;
        if ( this == null ) {
            throw new TypeError( "this is null or not defined" );
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if ( typeof callback !== "function" ) {
            throw new TypeError( callback + " is not a function" );
        }
        if ( arguments.length > 1 ) {
            T = thisArg;
        }
        k = 0;
        while( k < len ) {
 
            var kValue;
            if ( k in O ) {
                kValue = O[ k ];
                callback.call( T, kValue, k, O );
            }
            k++;
        }
    };
}

function arrchangeL(arr){
  //手动修改
  if (sessionStorage.loginType != 'cn') {
      var changeObj = di18n.messages[sessionStorage.loginType];
      arr.forEach(function(item,idx){

          //存在则替换
          if (changeObj[item.title]) {
              item.title = changeObj[item.title];
          }
      })
  }
  return arr
}

function strchangeL(str){
  if (sessionStorage.loginType != 'cn') {
      var changeObj = di18n.messages[sessionStorage.loginType];
      if (changeObj[str]) {
        str = changeObj[str]
      }

  }
  return str
}

function changeL(){  
  //获取编译语言
  // console.log(sessionStorage.loginType);
  //默认为繁体
  if (!sessionStorage.loginType) {
    sessionStorage.loginType = 'cn';
    // sessionStorage.setItem('loginType','cn');
  }

  var b = document.body;

  //改變參數
  di18n.locale = sessionStorage.loginType;
  // di18n.locale = sessionStorage.getItem('loginType');

  // var testText = b.innerText;
  // console.log(b.innerHTML);

  //转译
  // console.log(di18n.$html(b.innerHTML));

  b.innerHTML = di18n.$html(b.innerHTML);  
}
changeL();  

// })()

