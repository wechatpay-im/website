---
title: 开放接口概览
description: 微信支付官方开放的基于XML(APIv2)及JSON(APIv3)协议的OpenAPI接口地址。
---

| 业务标签 | 直连商户模式 | 合作伙伴模式
| :----: | :------: | :--------:
| 沙箱环境v2 {rowspan=3} | [获取沙箱环境密钥](/openapi/v2/xdc/apiv2getsignkey/sign/getsignkey) {colspan=2}
| [沙箱付款码支付](/openapi/v2/xdc/apiv2sandbox/pay/micropay) {colspan=2}
| [沙箱订单查询](/openapi/v2/xdc/apiv2sandbox/pay/orderquery) {colspan=2}
| 基础支付v2 {rowspan=12} | [付款码支付](/openapi/v2/pay/micropay) {colspan=2}
| [撤销订单](/openapi/v2/secapi/pay/reverse) {colspan=2}
| [授权码查询openid](/openapi/v2/tools/authcodetoopenid) {colspan=2}
| [统一下单](/openapi/v2/pay/unifiedorder) {colspan=2}
| [转换短链接](/openapi/v2/tools/shorturl) {colspan=2}
| [查询订单](/openapi/v2/pay/orderquery) {colspan=2}
| [关闭订单](/openapi/v2/pay/closeorder) {colspan=2}
| [申请退款](/openapi/v2/secapi/pay/refund) {colspan=2}
| [申请退款(单品优惠)](/openapi/v2/secapi/pay/refundv2) {colspan=2}
| [查询退款](/openapi/v2/pay/refundquery) {colspan=2}
| [查询退款(单品优惠)](/openapi/v2/pay/refundqueryv2) {colspan=2}
| [交易保障](/openapi/v2/payitil/report) {colspan=2}
| 合单支付v2{rowspan=3} | [合单下单](/openapi/v2/pay/combinedorder) {colspan=2}
| [合单查单](/openapi/v2/pay/querycombinedorder) {colspan=2}
| [合单关单](/openapi/v2/pay/closecombinedorder) {colspan=2}
| 分账v2{rowspan=10} | | [查询最大分账比例](/openapi/v2/pay/profitsharingmerchantratioquery)
| [添加分账接收方](/openapi/v2/pay/profitsharingaddreceiver) {colspan=2}
| [删除分账接收方](/openapi/v2/pay/profitsharingremovereceiver) {colspan=2}
| [请求单次分账](/openapi/v2/secapi/pay/profitsharing) {colspan=2}
| [请求多次分账](/openapi/v2/secapi/pay/multiprofitsharing) {colspan=2}
| [查询分账结果](/openapi/v2/pay/profitsharingquery) {colspan=2}
| [查询订单待分账金额](/openapi/v2/pay/profitsharingorderamountquery) {colspan=2}
| [完结分账](/openapi/v2/secapi/pay/profitsharingfinish) {colspan=2}
| [分账回退](/openapi/v2/secapi/pay/profitsharingreturn) {colspan=2}
| [回退结果查询](/openapi/v2/pay/profitsharingreturnquery) {colspan=2}
| 平台账单v2{rowspan=2} | [下载交易账单](/openapi/v2/pay/downloadbill) {colspan=2}
| [下载资金账单](/openapi/v2/pay/downloadfundflow) {colspan=2}
| 现金红包v2{rowspan=4} | [发放普通红包](/openapi/v2/mmpaymkttransfers/sendredpack) {colspan=2}
| [~~发放裂变红包~~](/openapi/v2/mmpaymkttransfers/sendgroupredpack) :no_entry_sign: {colspan=2}
| [查询红包记录](/openapi/v2/mmpaymkttransfers/gethbinfo) {colspan=2}
| [发放小程序红包](/openapi/v2/mmpaymkttransfers/sendminiprogramhb)
| 付款到零钱v2{rowspan=2} | [发起付款](/openapi/v2/mmpaymkttransfers/promotion/transfers)
| [查询付款](/openapi/v2/mmpaymkttransfers/gettransferinfo)
| 付款到银行卡v2{rowspan=3} | [获取加密公钥](/openapi/v2/risk/getpublickey)
| [发起付款](/openapi/v2/mmpaysptrans/pay_bank)
| [查询付款](/openapi/v2/mmpaymkttransfers/query_bank)
| 微信车主服务v2{rowspan=4} | [用户入场通知](/openapi/v2/vehicle/pay/notification) | [用户入场通知](/openapi/v2/vehicle/partnerpay/notification)
| [用户状态查询](/openapi/v2/vehicle/pay/querystate) | [用户状态查询](/openapi/v2/vehicle/partnerpay/querystate)
| [申请代扣](/openapi/v2/vehicle/pay/payapply) | [申请代扣](/openapi/v2/vehicle/partnerpay/payapply)
| [查询订单](/openapi/v2/transit/queryorder) | [查询订单](/openapi/v2/transit/partnerpay/queryorder)
| 免押租借v2{rowspan=5} | [创建租借订单](/openapi/v2/wxv/createrentbill)
| [查询租借订单](/openapi/v2/wxv/queryrentbill)
| [撤销租借订单](/openapi/v2/wxv/cancelbill)
| [完结租借订单](/openapi/v2/wxv/finishrentbill)
| [修改租借订单](/openapi/v2/wxv/changerentmoney)
| 免押速住v2{rowspan=3} | [创建速住订单](/openapi/v2/wxv/createhotelbill)
| [查询速住订单](/openapi/v2/wxv/queryhotelbill)
| [完结速住订单](/openapi/v2/wxv/finishhotelbill)
| 基础支付v3{rowspan=13} | [付款码支付](/openapi/v3/pay/transactions/codepay) | [付款码支付](/openapi/v3/pay/partner/transactions/codepay)
| [APP下单](/openapi/v3/pay/transactions/app) | [APP下单](/openapi/v3/pay/partner/transactions/app)
| [H5下单](/openapi/v3/pay/transactions/h5) | [H5下单](/openapi/v3/pay/partner/transactions/h5)
| [JSAPI下单](/openapi/v3/pay/transactions/jsapi) | [JSAPI下单](/openapi/v3/pay/partner/transactions/jsapi)
| [Native下单](/openapi/v3/pay/transactions/native) | [Native下单](/openapi/v3/pay/partner/transactions/native)
| | [扫码支付下单](/openapi/v3/pay/partner/transactions/scannedpos)
| [按平台单号查单](/openapi/v3/pay/transactions/id/{transaction_id}) | [按平台单号查单](/openapi/v3/pay/partner/transactions/id/{transaction_id})
| [按商户单号查单](/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}) | [按商户单号查单](/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no})
| [撤销订单](/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}/reverse) | [撤销订单](/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no}/reverse)
| [关闭订单](/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}/close) | [关闭订单](/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no}/close)
| [发起退款申请](/openapi/v3/refund/domestic/refunds) {colspan=2}
| [查询单笔退款](/openapi/v3/refund/domestic/refunds/{out_refund_no}) {colspan=2}
| [发起异常退款](/openapi/v3/refund/domestic/refunds/{refund_id}/apply-abnormal-refund) {colspan=2}
| 合单支付v3{rowspan=6} | [合单APP下单](/openapi/v3/combine-transactions/app) {colspan=2}
| [合单H5下单](/openapi/v3/combine-transactions/h5) {colspan=2}
| [合单JSAPI下单](/openapi/v3/combine-transactions/jsapi) {colspan=2}
| [合单Native下单](/openapi/v3/combine-transactions/native) {colspan=2}
| [合单查单](/openapi/v3/combine-transactions/out-trade-no/{combine_out_trade_no}) {colspan=2}
| [合单关单](/openapi/v3/combine-transactions/out-trade-no/{combine_out_trade_no}/close) {colspan=2}
| 免密支付v3{rowspan=5} | [JSAPI下单并授权](/openapi/v3/pay/transactions/jsapi-with-contract) | [JSAPI下单并授权](/openapi/v3/pay/partner/transactions/jsapi-with-contract)
| [小程序场景预签约](/openapi/v3/password-exempt-contract/contracts/normal/pre-entrust-sign/mini-program) | [小程序场景预签约](/openapi/v3/password-exempt-contract/contracts/service-provider/pre-entrust-sign/mini-program)
| [支付后场景预签约](/openapi/v3/password-exempt-contract/contracts/normal/pre-entrust-sign/pay-redirect-sign) | [支付后场景预签约](/openapi/v3/password-exempt-contract/contracts/service-provider/pre-entrust-sign/pay-redirect-sign)
| [通过商户协议号查询协议](/openapi/v3/password-exempt-contract/contracts/service-id/{service_id}/out-contract-code/{out_contract_code}) {colspan=2}
| [通过商户协议号解约协议](/openapi/v3/password-exempt-contract/contracts/service-id/{service_id}/out-contract-code/{out_contract_code}/terminate) {colspan=2}
| 平台账单v3{rowspan=4} | [申请交易账单](/openapi/v3/bill/tradebill) {colspan=2}
| [申请资金账单](/openapi/v3/bill/fundflowbill) {colspan=2}
| | [申请子商户资金账单](/openapi/v3/bill/sub-merchant-fundflowbill)
| [下载账单文件](/openapi/v3/billdownload/file) {colspan=2}
| 会员卡v3{rowspan=30} | [设置回调地址](/openapi/v3/marketing/membercard-open/callback#patch) {colspan=2}
| [查询回调地址](/openapi/v3/marketing/membercard-open/callback#get) {colspan=2}
| [创建会员卡模板](/openapi/v3/marketing/membercard-open/cards#post) {colspan=2}
| [查询会员卡模板列表](/openapi/v3/marketing/membercard-open/cards#get) {colspan=2}
| [查询会员卡模板信息](/openapi/v3/marketing/membercard-open/cards/{card_id}#get) {colspan=2}
| [修改会员卡模板信息](/openapi/v3/marketing/membercard-open/cards/{card_id}#patch) {colspan=2}
| [删除会员卡模板信息](/openapi/v3/marketing/membercard-open/cards/{card_id}#delete) {colspan=2}
| [设置会员卡模板权益项](/openapi/v3/marketing/membercard-open/cards/{card_id}/rights) {colspan=2}
| [老会员卡模板升级](/openapi/v3/marketing/membercard-open/cards/{card_id}/upgrade) {colspan=2}
| [导入会员Code](/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/deposit) {colspan=2}
| [根据openid导入用户会员卡](/openapi/v3/marketing/membercard-open/cards/{card_id}/users/import) {colspan=2}
| [根据手机号导入用户会员卡](/openapi/v3/marketing/membercard-open/cards/{card_id}/phone-membercard/import) {colspan=2}
| [通过加密手机号查询会员领卡状态](/openapi/v3/marketing/membercard-open/phonenumber-member/search) {colspan=2}
| [导入加密手机号提醒会员领卡](/openapi/v3/marketing/membercard-open/phonenumber-member/import) {colspan=2}
| [生成商户投放预授权凭证](/openapi/v3/marketing/membercard-open/cards/{card_id}/permission-tokens) {colspan=2}
| [查询用户在品牌下所有会员卡](/openapi/v3/marketing/membercard-open/user/cards) {colspan=2}
| [创建会员卡二维码](/openapi/v3/marketing/membercard-open/cards/{card_id}/qrcode) {colspan=2}
| [加密code解码(跳转型激活)](/openapi/v3/marketing/membercard-open/cards/{card_id}/decrypt-code) {colspan=2}
| [激活会员卡(跳转型激活)](/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}/activate) {colspan=2}
| [获取用户信息(跳转型激活)](/openapi/v3/marketing/membercard-open/activate-informations/{activate_ticket}) {colspan=2}
| [查询用户会员卡信息](/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}#get) {colspan=2}
| [修改用户会员卡信息](/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}#patch) {colspan=2}
| [作废用户会员卡](/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}/unavailable) {colspan=2}
| [设置会员权益](/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}/rights) {colspan=2}
| [支付结果页展示会员积分](/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}/bonus/prepare) {colspan=2}
| [设置支付后展示的积分到账](/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}/bonus/commit) {colspan=2}
| [创建活动](/openapi/v3/marketing/membercard-activity/activities#post) {colspan=2}
| [查询活动列表](/openapi/v3/marketing/membercard-activity/activities#get) {colspan=2}
| [查询活动详情](/openapi/v3/marketing/membercard-activity/activities/{activity_id}) {colspan=2}
| [终止活动](/openapi/v3/marketing/membercard-activity/activities/{activity_id}/terminate) {colspan=2}
| 委托营销v3{rowspan=3} | [查询合作关系列表](/openapi/v3/marketing/partnerships) {colspan=2}
| [建立合作关系](/openapi/v3/marketing/partnerships/build) {colspan=2}
| [终止合作关系](/openapi/v3/marketing/partnerships/terminate) {colspan=2}
| 支付即服务v3{rowspan=4} | [服务人员注册](/openapi/v3/smartguide/guides#post) {colspan=2}
| [服务人员查询](/openapi/v3/smartguide/guides#get) {colspan=2}
| [服务人员信息更新](/openapi/v3/smartguide/guides/{guide_id}) {colspan=2}
| [服务人员分配](/openapi/v3/smartguide/guides/{guide_id}/assign) {colspan=2}
| 智慧商圈v3{rowspan=4} | [商圈会员积分服务授权状态查询](/openapi/v3/businesscircle/user-authorizations/{openid}) {colspan=2}
| [商圈会员待积分状态查询](/openapi/v3/businesscircle/users/{openid}/points/commit_status) {colspan=2}
| [商圈会员积分同步](/openapi/v3/businesscircle/points/notify) {colspan=2}
| [商圈会员停车状态同步](/openapi/v3/businesscircle/parkings) {colspan=2}
| 品牌小店营销v3{rowspan=12} | [按区域查询品牌加价购活动](/openapi/v3/marketing/goods-subsidy-activity/activities) {colspan=2}
| [门店报名品牌加价购活动](/openapi/v3/marketing/goods-subsidy-activity/activity/{activity_id}/apply) {colspan=2}
| [锁定品牌加价购活动资格](/openapi/v3/marketing/goods-subsidy-activity/qualification/lock) {colspan=2}
| [解锁品牌加价购活动资格](/openapi/v3/marketing/goods-subsidy-activity/qualification/unlock) {colspan=2}
| [查询小店活动门店列表](/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores#get) {colspan=2}
| [添加小店活动门店](/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores#post) {colspan=2}
| [删除小店活动门店](/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores#delete) {colspan=2}
| [查询小店活动门店详情](/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores/{store_code}) {colspan=2}
| [生成小店活动物料码](/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/materials) {colspan=2}
| [添加零售小店活动业务代理](/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representative#put) {colspan=2}
| [删除零售小店活动业务代理](/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representative#delete) {colspan=2}
| [查询零售小店活动业务代理](/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representatives) {colspan=2}
| 电子小票v3{rowspan=5} | [创建自定义入口](/openapi/v3/marketing/shopping-receipt/customentrances) {colspan=2}
| [查询自定义入口](/openapi/v3/marketing/shopping-receipt/customentrances/{brand_id}#get) {colspan=2}
| [更新自定义入口](/openapi/v3/marketing/shopping-receipt/customentrances/{brand_id}#patch) {colspan=2}
| [上传商家电子小票跳转信息](/openapi/v3/marketing/shopping-receipt/merchantshoppingreceiptjumpinfos) {colspan=2}
| [上传电子小票图片文件](/openapi/v3/marketing/shopping-receipt/shoppingreceipts) {colspan=2}
| 小票打印v3{rowspan=2} | | [按小票机设备号打印订单](/openapi/v3/pay-devices/printers/{device_id}/print-orders)
| | [按小票机打印单号查询订单](/openapi/v3/pay-devices/printers/{device_id}/print-orders/{print_order_no})
| 点金计划v3{rowspan=5} | | [点金计划管理](/openapi/v3/goldplan/merchants/changegoldplanstatus)
| | [商家小票管理](/openapi/v3/goldplan/merchants/changecustompagestatus)
| | [同业过滤标签管理](/openapi/v3/goldplan/merchants/set-advertising-industry-filter)
| | [开通广告展示](/openapi/v3/goldplan/merchants/open-advertising-show)
| | [关闭广告展示](/openapi/v3/goldplan/merchants/close-advertising-show)
| 电子发票v3{rowspan=15} | | [检查子商户开票功能状态](/openapi/v3/new-tax-control-fapiao/merchant/{sub_mchid}/check)
| [创建电子发票卡券模板](/openapi/v3/new-tax-control-fapiao/card-template) {colspan=2}
| [配置开发选项](/openapi/v3/new-tax-control-fapiao/merchant/development-config#patch) {colspan=2}
| [查询配置的开发选项](/openapi/v3/new-tax-control-fapiao/merchant/development-config#get) {colspan=2}
| [查询电子发票](/openapi/v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}) {colspan=2}
| [获取抬头填写链接](/openapi/v3/new-tax-control-fapiao/user-title/title-url) {colspan=2}
| [获取用户填写的抬头](/openapi/v3/new-tax-control-fapiao/user-title) {colspan=2}
| [获取商户开票基础信息](/openapi/v3/new-tax-control-fapiao/merchant/base-information) {colspan=2}
| [获取商品和服务税收分类对照表](/openapi/v3/new-tax-control-fapiao/merchant/tax-codes) {colspan=2}
| [开具电子发票](/openapi/v3/new-tax-control-fapiao/fapiao-applications) {colspan=2}
| [冲红电子发票](/openapi/v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/reverse) {colspan=2}
| [获取发票下载信息](/openapi/v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/fapiao-files) {colspan=2}
| [下载发票文件](/openapi/v3/new-tax-control-fapiao/download) {colspan=2}
| [上传电子发票文件](/openapi/v3/new-tax-control-fapiao/fapiao-applications/upload-fapiao-file) {colspan=2}
| [将电子发票插入微信用户卡包](/openapi/v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/insert-cards) {colspan=2}
| 出租车电子发票v3{rowspan=11} | | [新增出租车公司](/openapi/v3/taxi-invoice/taxi-company/create-taxi-company)
| | [获取出租车公司商户信息](/openapi/v3/taxi-invoice/taxi-companies/{company_mchid})
| | [更新出租车信息](/openapi/v3/taxi-invoice/taxi/update-taxi)
| | [获取出租车信息](/openapi/v3/taxi-invoice/taxies/{plate_number})
| | [更新司机信息](/openapi/v3/taxi-invoice/driver/update-driver)
| | [获取司机信息](/openapi/v3/taxi-invoice/drivers/{driver_license})
| | [司机签到签退](/openapi/v3/taxi-invoice/attendance/punch)
| | [获取乘客行程单列表](/openapi/v3/taxi-invoice/user-taxi-orders)
| | [根据凭证查询乘客行程单](/openapi/v3/taxi-invoice/user-taxi-order/find-by-token)
| | [上传出租车电子发票文件](/openapi/v3/taxi-invoice/cards/upload-file)
| | [将出租车电子发票插入微信用户卡包](/openapi/v3/taxi-invoice/cards)
| 微工卡v3{rowspan=9} | | [生成用户授权token](/openapi/v3/payroll-card/tokens)
| | [查询微工卡授权关系](/openapi/v3/payroll-card/relations/{openid})
| | [微工卡核身预下单](/openapi/v3/payroll-card/authentications/pre-order)
| | [微工卡核身预下单(流程中完成授权)](/openapi/v3/payroll-card/authentications/pre-order-with-auth)
| | [获取核身结果](/openapi/v3/payroll-card/authentications/{authenticate_number})
| | [查询核身记录](/openapi/v3/payroll-card/authentications)
| | [校验核身结果](/openapi/v3/payroll-card/wesure/token-validations)
| | [生成投保结果](/openapi/v3/payroll-card/wesure/insurance)
| | [发起批量转账](/openapi/v3/payroll-card/transfer-batches)
| 商家充值v3 {rowspan=2} | [申请银行转账充值](/openapi/v3/recharge/bank-transfer-recharges/apply) {colspan=2}
| [查询银行转账充值结果](/openapi/v3/recharge/bank-transfer-recharges/out-recharge-no/{out_recharge_no}) {colspan=2}
| 商家转账v3{rowspan=23} | [发起商家转账](/openapi/v3/transfer/batches) | [发起商家转账](/openapi/v3/partner-transfer/batches)
| [查询批次单(平台批次单号)](/openapi/v3/transfer/batches/batch-id/{batch_id}) | [查询批次单(平台批次单号)](/openapi/v3/partner-transfer/batches/batch-id/{batch_id})
| [查询批次单(商家批次单号)](/openapi/v3/transfer/batches/out-batch-no/{out_batch_no}) | [查询批次单(商家批次单号)](/openapi/v3/partner-transfer/batches/out-batch-no/{out_batch_no})
| [查询明细单(平台批次单号)](/openapi/v3/transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}) | [查询明细单(平台批次单号)](/openapi/v3/partner-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id})
| [查询明细单(商家批次单号)](/openapi/v3/transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}) | [查询明细单(商家批次单号)](/openapi/v3/partner-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no})
| [申请转账账单电子回单](/openapi/v3/transfer/bill-receipt) {colspan=2}
| [查询账单回单受理结果](/openapi/v3/transfer/bill-receipt/{out_batch_no}) {colspan=2}
| [申请转账明细电子回单](/openapi/v3/transfer-detail/electronic-receipts#post) {colspan=2}
| [查询明细回单受理结果](/openapi/v3/transfer-detail/electronic-receipts#get) {colspan=2}
| [下载电子回单文件](/openapi/v3/transferdownload/signfile) {colspan=2}
| | [受理商家转账](/openapi/v3/platsolution/mch-transfer/batches/apply)
| | [受理单次预约商家转账](/openapi/v3/platsolution/mch-transfer/reservation/apply)
| | [关闭预约商家转账记录](/openapi/v3/platsolution/mch-transfer/reservation/out-reservation-no/{out_reservation_no}/close)
| | [平台预约单号查询预约商家转账记录](/openapi/v3/platsolution/mch-transfer/reservation/reservation-id/{reservation_id})
| | [商户预约单号查询预约商家转账记录](/openapi/v3/platsolution/mch-transfer/reservation/out-reservation-no/{out_reservation_no})
| | [商户明细单号查询明细单](/openapi/v3/platsolution/mch-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no})
| | [商户转账批次单号查询批次单](/openapi/v3/platsolution/mch-transfer/batches/out-batch-no/{out_batch_no})
| | [申请商家转账批次电子回单](/openapi/v3/platsolution/mch-transfer/batches/summary-receipts/out-batch-no/{out_batch_no}/apply)
| | [查询商家转账批次电子回单](/openapi/v3/platsolution/mch-transfer/batches/summary-receipts/out-batch-no/{out_batch_no})
| | [平台转账批次单号查询批次单](/openapi/v3/platsolution/mch-transfer/batches/batch-id/{batch_id})
| | [申请商家转账明细电子回单](/openapi/v3/platsolution/mch-transfer/batches/detail-receipts/out-batch-no/{out_batch_no}/out-detail-no/{out_detail_no}/apply)
| | [查询商家转账明细电子回单](/openapi/v3/platsolution/mch-transfer/batches/detail-receipts/out-batch-no/{out_batch_no}/out-detail-no/{out_detail_no})
| | [平台转账明细单号查询明细单](/openapi/v3/platsolution/mch-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id})
| 转账须确认模式v3 {rowspan=8} | [发起转账](/openapi/v3/fund-app/mch-transfer/transfer-bills)
| [撤销转账](/openapi/v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}/cancel)
| [微信转账单号查询转账单](/openapi/v3/fund-app/mch-transfer/transfer-bills/transfer-bill-no/{transfer_bill_no})
| [商户单号查询转账单](/openapi/v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no})
| [微信单号申请电子回单](/openapi/v3/fund-app/mch-transfer/elecsign/transfer-bill-no)
| [商户单号申请电子回单](/openapi/v3/fund-app/mch-transfer/elecsign/out-bill-no)
| [微信单号查询电子回单](/openapi/v3/fund-app/mch-transfer/elecsign/transfer-bill-no/{transfer_bill_no})
| [商户单号查询电子回单](/openapi/v3/fund-app/mch-transfer/elecsign/out-bill-no/{out_bill_no})
| 平台证书v3{rowspan=1} | [获取平台证书列表](/openapi/v3/certificates) {colspan=2}

{.im-table}
