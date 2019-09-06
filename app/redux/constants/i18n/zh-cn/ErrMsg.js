export default { 
   // session error code
  '-10000': '登录失败',
  '-10001': '会话过期',
  '-10002': '权限不足',
  '-10003': '邮箱或密码不能为空',
  '-10004': 'throttle error',
  '-10005': '用户未激活',
  '-10006': '用户被禁用',

  '-10100': '用户名不能为空',
  '-10101': 'Email不能为空',
  '-10102': '邮箱已被注册',
  '-10103': '密码不能为空',
  '-10104': '文件上传有误',
  '-10105': '导入文件不能为空',
  '-10106': '该用户不存在',
  '-10107': '更新失败',
  '-10108': '选择对象不能为空',
  '-10109': '此用户来自外部用户目录',

  '-10200': '组名不能为空',
  '-10201': '该组不存在',
  '-10202': '选择对象不能为空',
  '-10203': '此用户组来自外部用户目录',

  '-10300': '目录名称不能为空',
  '-10301': '主机名不能为空',
  '-10302': '端口不能为空',
  '-10303': '账号不能为空',
  '-10304': '密码不能为空',
  '-10305': 'Base DN不能为空',
  '-10306': '用户对象类不能为空',
  '-10307': '用户对象过滤不能为空',
  '-10308': '用户对象名属性不能为空',
  '-10309': '用户对象Email属性不能为空',
  '-10310': '组对象类不能为空',
  '-10311': '组对象过滤不能为空',
  '-10312': '组对象名属性不能为空',
  '-10313': '组对象成员属性不能为空',
  '-10314': '该目录不存在',
  '-10315': '服务器连接失败',
  '-10316': '用户同步失败',
  '-10317': '用户组同步失败',

  // issue
  '-11100': '问题类型不能为空',
  '-11101': 'Schema不存在',
  '-11102': '时间跟踪字段格式有误',
  '-11103': '问题不存在或不属于此项目',
  '-11104': '指定经办人不能为空',
  '-11105': '过滤器名称不能为空',
  '-11106': '过滤器名称不能重复',
  '-11107': '过滤器不存在或不属于此项目',
  '-11108': '主题不能为空',
  '-11109': '拷贝对象必须指定',
  '-11110': '父问题对象不存在或不属于此项目',
  '-11111': '父问题对象必须指定',
  '-11112': '发布问题不能为空',
  '-11113': '解决问题的版本必须被指定',
  '-11114': '该问题不能转化成子任务',
  '-11115': '流程提交失败',
  '-11116': '当前用户没有分配问题的权限',
  '-11117': '当前用户没有被分配问题的权限',
  '-11118': '指定用户没有被分配问题的权限',
  '-11119': '获取导入文件失败',
  '-11120': '导入文件内容解析错误',

  '-11121': '必须指定链出问题',
  '-11122': '必须指定链入问题',
  '-11123': '链接关系指定有误',
  '-11124': '链接关系已存在',
  '-11125': '此链接不存在',

  '-11131': '发布版本不能为空',
  '-11132': '解决问题对象不能为空',
  '-11133': '该发布版本已存在',

  // comments error code
  '-11200': '备注内容不能为空',
  '-11201': '备注不存在或不属于此项目',
  '-11202': '回复ID不能为空',
  '-11203': '该回复不存在',
  '-11204': '操作有误',
  
  // worklog error code
  '-11300': '耗费时间不能为空',
  '-11301': '耗费时间格式不正确',
  '-11302': '开始时间不能为空',
  '-11303': '剩余时间调整方式不正确',
  '-11304': '必须指定剩余时间',
  '-11305': '剩余时间指定格式不正确',
  '-11306': '必须制定缩减时间',
  '-11307': '缩减时间格式不正确',
  '-11308': '问题不存在',
  '-11309': '工作日志不存在或不属于此问题',
  
  // module error code
  '-11400': '模块名称不能为空',
  '-11401': '模块名称不能重复',
  '-11402': '模块不存在或不属于此项目',
  '-11403': '该模块在问题中被使用',
  '-11404': '操作有误',
  '-11405': '切换模块不能为空',
  '-11406': '切换模块不存在或不属于此项目',
  
  // version error code
  '-11500': '版本名称不能为空',
  '-11501': '版本名称不能重复',
  '-11502': '版本开始时间必须小于结束时间',
  '-11503': '版本不存在或不属于此项目',
  '-11504': '该版本在问题中被使用',
  '-11505': '状态值有误',
  '-11506': '状态值不能为空',
  '-11507': '源版本不存在或不属于此项目',
  '-11508': '源版本已归档',
  '-11509': '目标版本不存在或不属于此项目',
  '-11510': '目标版本已归档',
  '-11511': '该版本在问题中被使用',
  '-11512': '操作有误',
  '-11513': '切换版本不能为空',
  '-11514': '切换版本不存在或不属于此项目',

  // board error code
  '-11600': '看板名称不能为空',
  '-11601': '看板不存在或不属于此项目',
  '-11602': '看板列没有制定',
  '-11603': '排序问题不能为空',
  '-11604': '排序位置不能为空',
  '-11605': '排序列表不存在',
  '-11606': '排序问题在列表中未发现',
  '-11607': '排序位置在列表中不能确定',
  '-11608': '看板类型错误',

  '-11700': '移动问题不能为空',
  '-11701': '移动问题源Sprint编号不能为空',
  '-11702': '移动问题目标Sprint编号不能为空',
  '-11703': '移动问题在源Sprint中不能找到',
  '-11704': '移动问题已经存在于目标Sprint',
  '-11705': '启动的Sprint编号不能为空',
  '-11706': '活动中的Sprint已存在',
  '-11707': '更先的Sprint已存在',
  '-11708': 'Sprint不存在或不在项目当中',
  '-11709': 'Sprint计划开始时间不能为空',
  '-11710': 'Sprint计划结束时间不能为空',
  '-11711': '要完成的Sprint不能为空',
  '-11712': '要完成的Sprint必须是活动中的',
  '-11713': '要完成的Sprint问题有错误',
  '-11714': '要删除的Sprint编号不能为空',
  '-11715': '活动中的或已完成的Sprint不能被删除',
  '-11716': '问题不能移出或移入已完成的Sprint中',
  '-11717': '看板ID不能为空',

  '-11800': 'Epic名称不能为空',
  '-11801': 'Epic背景色不能为空',
  '-11802': 'Epic名称不能重复',
  '-11803': 'Epic不存在或不属于此项目',
  '-11804': 'Epic在问题中被使用',
  '-11805': '操作有误',
  '-11806': '切换Epic不能为空',
  '-11807': '切换Epic不存在或不属于此项目',

  '-11850': '该项目不存在',
  '-11851': '报告类型错误',
  '-11852': '过滤器名称不能为空',
  '-11853': '过滤器检索条件不能为空',
  '-11854': '统计时间间隔值错误',
  '-11855': '统计水平维度不能为空',

  '-11900': '名称不能为空',
  '-11901': '该名称已存在',
  '-11902': '该对象不存在',
  '-11903': '文档上传失败',
  '-11904': '该文件不存在',
  '-11905': '父目录不能为空',
  '-11906': '父目录不存在',
  '-11907': '拷贝对象不能为空',
  '-11908': '拷贝目标路径不能为空',
  '-11909': '拷贝对象不存在',
  '-11910': '拷贝目标路径不存在',
  '-11911': '移动对象不能为空',
  '-11912': '移动目标路径不能为空',
  '-11913': '移动对象不存在',
  '-11914': '移动目标路径不存在',

  '-11950': '父目录不能为空',
  '-11951': '父目录不存在',
  '-11952': '名称不能为空',
  '-11953': '名称已存在',
  '-11954': '该对象不存在',
  '-11955': '该对象已被锁定',
  '-11956': '该对象解锁失败',
  '-11957': '该版本不存在',
  '-11958': '该文件不存在',
  '-11959': '文档上传失败',
  '-11960': '拷贝对象不能为空',
  '-11961': '拷贝目标路径不能为空',
  '-11962': '拷贝对象不存在',
  '-11963': '拷贝目标路径不存在',
  '-11964': '移动对象不能为空',
  '-11965': '移动目标路径不能为空',
  '-11966': '移动对象不存在',
  '-11967': '移动目标路径不存在',

  // type error code
  '-12000': '类型名称不能为空',
  '-12001': '类型名称不能重复',
  '-12002': '类型缩码不能为空',
  '-12003': '类型缩码不能重复',
  '-12004': '类型关联界面不能为空',
  '-12005': '类型关联工作流不能为空',
  '-12006': '类型不存在或不属于此项目',
  '-12007': '类型在问题中被使用',

  // workflow error code
  '-12100': '工作流名称不能为空',
  '-12101': '工作流不存在或不属于此项目',
  '-12102': '该工作流已绑定了问题类型',

  // field error code
  '-12200': '字段名称不能为空',
  '-12201': '字段键值不能为空',
  '-12202': '该键值已被系统占用',
  '-12203': '键值不能重复',
  '-12204': '字段类型不能为空',
  '-12205': '字段类型值不正确',
  '-12206': '字段不存在或不属于此项目',
  '-12207': '该字段在界面中被使用',
  '-12208': '该字段为系统内置字段，不能删除',

  // screen error code
  '-12300': '界面名称不能为空',
  '-12301': '界面不存在或不属于此项目',
  '-12302': '该界面已绑定了问题类型',
  '-12303': '该界面在流程中被使用',

  // state error code
  '-12400': '状态名称不能为空',
  '-12401': '状态名称不能重复',
  '-12402': '状态不存在或不属于此项目',
  '-12403': '状态在问题中被使用',
  '-12404': '状态在工作流中被使用',
  '-12405': '状态类别不能为空',
  '-12406': '该状态为系统内置状态，不能编辑和删除',

  // resolution error code
  '-12500': '结果名称不能为空',
  '-12501': '结果名称不能重复',
  '-12502': '结果不存在或不属于此项目',
  '-12503': '结果在问题中被使用',
  '-12504': '该结果为系统内置结果，不能编辑和删除',

  // priority error code
  '-12600': '优先级名称不能为空',
  '-12601': '优先级名称不能重复',
  '-12602': '优先级不存在或不属于此项目',
  '-12603': '优先级在问题中被使用',
  '-12604': '该优先级为系统内置优先级，不能编辑和删除',

  // role error code
  '-12700': '角色名称不能为空',
  '-12701': '权限项值不正确',
  '-12702': '角色不存在或不属于此项目',
  '-12703': '角色在项目中被使用',

  // event error code
  '-12800': '事件名称不能为空',
  '-12801': '事件名称不能重复',
  '-12802': '事件不存在或不属于此项目',

  // project error code
  '-14000': '项目名称不能为空',
  '-14001': '项目键值不能为空',
  '-14002': '项目键值已被占用',
  '-14003': '指定负责人不存在',
  '-14004': '项目不存在',
  '-14005': '必须指定负责人',
  '-14006': '项目不存在',
  '-14007': '没有选择对象',
  '-14008': '没有指定状态',
  '-14009': '该项目已关闭',

  // mysetting error code
  '-15000': '用户不存在',
  '-15001': '原密码不能为空',
  '-15002': '原密码不正确',
  '-15003': '新密码不能为空',
  '-15004': '密码重置失败',
  '-15005': '用户姓名不能为空',
  '-15006': '上传头像文件不能为空',
  '-15007': '上传头像文件格式有误',

  // file error code
  '-15100': '文件不存在',
  '-15101': '文件上传失败',
  '-15102': '文件删除失败', 

  '-15200': '邮件发送失败',
  '-15201': '收件人不能为空',
  '-15202': '邮件标题不能为空',
  '-15203': '邮件服务器参数配置错误',

  '-99999': '系统错误' 
};
