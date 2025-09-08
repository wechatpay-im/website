---
title: 开放接口概览
description: 微信支付官方开放的基于XML(APIv2)及JSON(APIv3)协议的OpenAPI接口地址。
head:
  - - meta
    - name: keywords
      content: 微信支付, OpenAPI路径地址, 接口文档, WeChatPay merchant partner OpenAPI entry path
prev:
  text: 数据签名
  link: /guide/digital-signature
next:
  text: 回调通知
  link: /webhook/
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
| 合单支付v2{rowspan=3} | [合单下单](/openapi/v2/pay/combinedorder) :closed_lock_with_key: {colspan=2}
| [合单查单](/openapi/v2/pay/querycombinedorder) :closed_lock_with_key: {colspan=2}
| [合单关单](/openapi/v2/pay/closecombinedorder) :closed_lock_with_key: {colspan=2}
| 刷脸支付v2{rowspan=4} | [人脸识别获取调用凭证](/openapi/v2/face/get_wxpayface_authinfo) {colspan=2}
| [提交刷脸支付](/openapi/v2/pay/facepay) {colspan=2}
| [查询订单](/openapi/v2/pay/facepayquery) {colspan=2}
| [撤销订单](/openapi/v2/secapi/pay/facepayreverse) {colspan=2}
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
| [发放小程序红包](/openapi/v2/mmpaymkttransfers/sendminiprogramhb) {colspan=2}
| 付款到零钱v2{rowspan=2} | [发起付款](/openapi/v2/mmpaymkttransfers/promotion/transfers)
| [查询付款](/openapi/v2/mmpaymkttransfers/gettransferinfo)
| 付款到银行卡v2{rowspan=3} | [获取加密公钥](/openapi/v2/risk/getpublickey)
| [发起付款](/openapi/v2/mmpaysptrans/pay_bank)
| [查询付款](/openapi/v2/mmpaymkttransfers/query_bank)
| 企业微信v2{rowspan=4} | [向员工付款](/openapi/v2/mmpaymkttransfers/promotion/paywwsptrans2pocket)
| [查询付款记录](/openapi/v2/mmpaymkttransfers/promotion/querywwsptrans2pocket)
| [发放企业红包](/openapi/v2/mmpaymkttransfers/sendworkwxredpack)
| [查询红包记录](/openapi/v2/mmpaymkttransfers/queryworkwxredpack)
| 扣款服务v2{rowspan=7} | [公众号纯签约](/openapi/v2/papay/entrustweb) | [公众号纯签约](/openapi/v2/papay/partner/entrustweb)
| [H5纯签约](/openapi/v2/papay/h5entrustweb) | [H5纯签约](/openapi/v2/papay/partner/h5entrustweb)
| [APP预签约](/openapi/v2/papay/preentrustweb) | [APP预签约](/openapi/v2/papay/partner/preentrustweb)
| [支付中签约](/openapi/v2/pay/contractorder)
| [查询签约关系](/openapi/v2/papay/querycontract) | [查询签约关系](/openapi/v2/papay/partner/querycontract)
| [申请扣款](/openapi/v2/pay/pappayapply) | [申请扣款](/openapi/v2/pay/partner/pappayapply)
| [申请解约](/openapi/v2/papay/deletecontract) {colspan=2}
| 酒店押金v2{rowspan=8} | [支付押金(付款码支付)](/openapi/v2/deposit/micropay) {colspan=2}
| [支付押金(人脸支付)](/openapi/v2/deposit/facepay) {colspan=2}
| [支付押金(统一下单)](/openapi/v2/deposit/unifiedorder) {colspan=2}
| [查询订单](/openapi/v2/deposit/orderquery) {colspan=2}
| [撤销订单](/openapi/v2/deposit/reverse) {colspan=2}
| [消费押金](/openapi/v2/deposit/consume) {colspan=2}
| [申请退款(押金)](/openapi/v2/deposit/refund) {colspan=2}
| [查询退款(押金)](/openapi/v2/deposit/refundquery) {colspan=2}
| 微信车主服务v2{rowspan=3} | [用户入场通知](/openapi/v2/vehicle/pay/notification) | [用户入场通知](/openapi/v2/vehicle/partnerpay/notification)
| [用户状态查询](/openapi/v2/vehicle/pay/querystate) | [用户状态查询](/openapi/v2/vehicle/partnerpay/querystate)
| [申请代扣](/openapi/v2/vehicle/pay/payapply) | [申请代扣](/openapi/v2/vehicle/partnerpay/payapply)
| 乘车码代扣v2 {rowspan=3} | [用户状态查询](/openapi/v2/transit/pay/querystate) | [用户状态查询](/openapi/v2/transit/partnerpay/querystate)
| [申请扣款](/openapi/v2/transit/pay/payapply) | [申请扣款](/openapi/v2/transit/partnerpay/payapply)
| [查询订单](/openapi/v2/transit/queryorder) | [查询订单](/openapi/v2/transit/partnerpay/queryorder)
| 免押租借v2{rowspan=5} | [创建租借订单](/openapi/v2/wxv/createrentbill)
| [查询租借订单](/openapi/v2/wxv/queryrentbill)
| [撤销租借订单](/openapi/v2/wxv/cancelbill)
| [完结租借订单](/openapi/v2/wxv/finishrentbill)
| [修改租借订单](/openapi/v2/wxv/changerentmoney)
| 免押速住v2{rowspan=3} | [创建速住订单](/openapi/v2/wxv/createhotelbill)
| [查询速住订单](/openapi/v2/wxv/queryhotelbill)
| [完结速住订单](/openapi/v2/wxv/finishhotelbill)
| 清关报关v2{rowspan=3} | [提交订单附加信息](/openapi/v2/cgi-bin/mch/customs/customdeclareorder)
| [查询订单附加信息](/openapi/v2/cgi-bin/mch/customs/customdeclarequery)
| [重推订单附加信息](/openapi/v2/cgi-bin/mch/newcustoms/customdeclareredeclare)
| 基础支付v3{rowspan=14} | [付款码支付](/openapi/v3/pay/transactions/codepay) | [付款码支付](/openapi/v3/pay/partner/transactions/codepay)
| [APP下单](/openapi/v3/pay/transactions/app) | [APP下单](/openapi/v3/pay/partner/transactions/app)
| [H5下单](/openapi/v3/pay/transactions/h5) | [H5下单](/openapi/v3/pay/partner/transactions/h5)
| [JSAPI下单](/openapi/v3/pay/transactions/jsapi) | [JSAPI下单](/openapi/v3/pay/partner/transactions/jsapi)
| [Native下单](/openapi/v3/pay/transactions/native) | [Native下单](/openapi/v3/pay/partner/transactions/native)
| | [扫码支付下单](/openapi/v3/pay/partner/transactions/scannedpos)
| | [小程序支付下单](/openapi/v3/pay/partner/transactions/miniprogram)
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
| 分账v3{rowspan=10} | | [查询最大分账比例](/openapi/v3/profitsharing/merchant-configs/{sub_mchid})
| | [添加分账接收方](/openapi/v3/profitsharing/receivers/add)
| | [删除分账接收方](/openapi/v3/profitsharing/receivers/delete)
| | [请求分账](/openapi/v3/profitsharing/orders)
| | [查询分账结果](/openapi/v3/profitsharing/orders/{out_order_no})
| | [查询剩余待分金额](/openapi/v3/profitsharing/transactions/{transaction_id}/amounts)
| | [解冻剩余资金](/openapi/v3/profitsharing/orders/unfreeze)
| | [请求分账回退](/openapi/v3/profitsharing/return-orders)
| | [查询分账回退结果](/openapi/v3/profitsharing/return-orders/{out_return_no})
| | [申请分账账单](/openapi/v3/profitsharing/bills)
| 连锁品牌分账v3{rowspan=9} | | [查询最大分账比例](/openapi/v3/brand/profitsharing/brand-configs/{brand_mchid})
| | [添加分账接收方](/openapi/v3/brand/profitsharing/receivers/add)
| | [删除分账接收方](/openapi/v3/brand/profitsharing/receivers/delete)
| | [请求分账](/openapi/v3/brand/profitsharing/orders#post)
| | [查询分账结果](/openapi/v3/brand/profitsharing/orders#get)
| | [查询剩余待分金额](/openapi/v3/brand/profitsharing/orders/{transaction_id}/amounts)
| | [完结分账](/openapi/v3/brand/profitsharing/finish-order)
| | [请求分账回退](/openapi/v3/brand/profitsharing/returnorders#post)
| | [查询分账回退结果](/openapi/v3/brand/profitsharing/returnorders#get)
| 连锁品牌门店v3{rowspan=5} | [创建门店](/openapi/v3/merchant-store/stores) {colspan=2}
| [查询门店](/openapi/v3/merchant-store/stores/{store_id}#get) {colspan=2}
| [修改门店](/openapi/v3/merchant-store/stores/{store_id}#patch) {colspan=2}
| [给门店绑定收款商户号](/openapi/v3/merchant-store/stores/{store_id}/recipients/bind) {colspan=2}
| [解绑门店无效的收款商户号](/openapi/v3/merchant-store/stores/{store_id}/recipients/unbind) {colspan=2}
| 品牌红包v3 {rowspan=5} | [品牌商户发放红包](/openapi/v3/fund-app/brand-redpacket/brand-merchant-batches)
| [商家批次单号查询批次单](/openapi/v3/fund-app/brand-redpacket/brand-merchant-out-batches/{out_batch_no})
| [商家明细单号查询明细单](/openapi/v3/fund-app/brand-redpacket/brand-merchant-out-batches/{out_batch_no}/out-details/{out_detail_no})
| [微信支付批次单号查询批次单](/openapi/v3/fund-app/brand-redpacket/brand-merchant-batches/{batch_no})
| [微信支付明细单号查询明细单](/openapi/v3/fund-app/brand-redpacket/brand-merchant-batches/{batch_no}/details/{detail_no})
| 商家名片会员v3{rowspan=17} | | [创建会员卡模板](/openapi/v3/brand/partner/card-member/cards#post)
| | [查询会员卡模板列表](/openapi/v3/brand/partner/card-member/cards#get)
| | [查询会员卡模板信息](/openapi/v3/brand/partner/card-member/cards/{card_id}#get)
| | [修改会员卡模板信息](/openapi/v3/brand/partner/card-member/cards/{card_id}#patch)
| | [删除会员卡模板信息](/openapi/v3/brand/partner/card-member/cards/{card_id}#delete)
| | [作废会员卡模板](/openapi/v3/brand/partner/card-member/cards/{card_id}/invalidate)
| | [查询品牌用户的所有会员卡](/openapi/v3/brand/partner/card-member/user-cards)
| | [查询品牌用户会员卡信息](/openapi/v3/brand/partner/card-member/user-cards/{user_card_code}#get)
| | [修改品牌用户会员卡信息](/openapi/v3/brand/partner/card-member/user-cards/{user_card_code}#patch)
| | [作废品牌用户会员卡](/openapi/v3/brand/partner/card-member/user-cards/{user_card_code}/invalidate)
| | [入会组件预授权](/openapi/v3/brand/partner/card-member/open-user-card-tokens)
| | [导入用户会员卡(OPENID)](/openapi/v3/brand/partner/card-member/user-cards/import-by-openid)
| | [导入用户会员卡(手机号)](/openapi/v3/brand/partner/card-member/user-cards/import-by-phone)
| | [同步会员开通结果](/openapi/v3/brand/partner/card-member/user-cards/{user_card_code}/confirm)
| | [创建用户动态信息](/openapi/v3/brand/partner/card-member/user-feeds)
| | [同步积分余额](/openapi/v3/brand/partner/card-member/user-points/sync)
| | [同步积分兑券结果](/openapi/v3/brand/partner/card-member/user-points/exchange-coupon/confirm)
| 品牌门店v3{rowspan=4} | | [创建门店](/openapi/v3/brand/partner/store/brandstores)
| | [管理门店](/openapi/v3/brand/partner/store/brandstores/{store_id})
| | [绑定收款商户号](/openapi/v3/brand/partner/store/brandstores/{store_id}/bindrecipient)
| | [解绑收款商户号](/openapi/v3/brand/partner/store/brandstores/{store_id}/unbindrecipient)
| 摇优惠活动v3{rowspan=1} | | [查询摇优惠活动列表](/openapi/v3/brand/marketing/shake-activities/activities)
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
| 代金券v3{rowspan=16} | [设置消息通知地址](/openapi/v3/marketing/favor/callbacks#post) {colspan=2}
| [获取已设置的消息通知地址](/openapi/v3/marketing/favor/callbacks#get) {colspan=2}
| [创建代金券批次](/openapi/v3/marketing/favor/coupon-stocks) {colspan=2}
| [条件查询批次列表](/openapi/v3/marketing/favor/stocks) {colspan=2}
| [查询批次详情](/openapi/v3/marketing/favor/stocks/{stock_id}) {colspan=2}
| [查询代金券可用单品](/openapi/v3/marketing/favor/stocks/{stock_id}/items) {colspan=2}
| [查询代金券可用商户](/openapi/v3/marketing/favor/stocks/{stock_id}/merchants) {colspan=2}
| [激活代金券批次](/openapi/v3/marketing/favor/stocks/{stock_id}/start) {colspan=2}
| [暂停代金券批次](/openapi/v3/marketing/favor/stocks/{stock_id}/pause) {colspan=2}
| [重启代金券批次](/openapi/v3/marketing/favor/stocks/{stock_id}/restart) {colspan=2}
| [发放代金券](/openapi/v3/marketing/favor/users/{openid}/coupons#post) {colspan=2}
| [根据商户号查用户的券](/openapi/v3/marketing/favor/users/{openid}/coupons#get) {colspan=2}
| [查询代金券详情](/openapi/v3/marketing/favor/users/{openid}/coupons/{coupon_id}) {colspan=2}
| [下载批次核销明细](/openapi/v3/marketing/favor/stocks/{stock_id}/use-flow) {colspan=2}
| [下载批次退款明细](/openapi/v3/marketing/favor/stocks/{stock_id}/refund-flow) {colspan=2}
| [（营销）图片上传](/openapi/v3/marketing/favor/media/image-upload) {colspan=2}
| 消费金v3{rowspan=4} | [发放指定批次的消费金](/openapi/v3/multiuse/users/{openid}/coupons)
| [下载批次核销明细(消费金)](/openapi/v3/multiuse/stocks/{stock_id}/use-flow)
| [下载批次发放明细(消费金)](/openapi/v3/multiuse/stocks/{stock_id}/send-flow)
| [下载批次退款明细(消费金)](/openapi/v3/multiuse/stocks/{stock_id}/refund-flow)
| 商家券v3{rowspan=25} | [设置商家券事件通知地址](/openapi/v3/marketing/busifavor/callbacks#post) {colspan=2}
| [查询商家券事件通知地址](/openapi/v3/marketing/busifavor/callbacks#get) {colspan=2}
| [上传预存code](/openapi/v3/marketing/busifavor/stocks/{stock_id}/couponcodes#post) {colspan=2}
| [查询预存code列表](/openapi/v3/marketing/busifavor/stocks/{stock_id}/couponcodes#get) {colspan=2}
| [查询预存code详情](/openapi/v3/marketing/busifavor/stocks/{stock_id}/couponcodes/{coupon_code}#get) {colspan=2}
| [删除预存code](/openapi/v3/marketing/busifavor/stocks/{stock_id}/couponcodes/{coupon_code}#delete) {colspan=2}
| [创建商家券](/openapi/v3/marketing/busifavor/stocks) {colspan=2}
| [查询商家券详情](/openapi/v3/marketing/busifavor/stocks/{stock_id}#get) {colspan=2}
| [修改商家券基本信息](/openapi/v3/marketing/busifavor/stocks/{stock_id}#patch) {colspan=2}
| [修改批次预算](/openapi/v3/marketing/busifavor/stocks/{stock_id}/budget) {colspan=2}
| [向用户发券](/openapi/v3/marketing/busifavor/coupons/send) {colspan=2}
| [向用户发商品券](/openapi/v3/marketing/busifavor/product-coupons/send) {colspan=2}
| [使券失效](/openapi/v3/marketing/busifavor/coupons/deactivate) {colspan=2}
| [申请退券](/openapi/v3/marketing/busifavor/coupons/return) {colspan=2}
| [关联订单信息](/openapi/v3/marketing/busifavor/coupons/associate) {colspan=2}
| [取消关联订单信息](/openapi/v3/marketing/busifavor/coupons/disassociate) {colspan=2}
| [根据过滤条件查询用户券](/openapi/v3/marketing/busifavor/users/{openid}/coupons) {colspan=2}
| [查询用户单张券详情](/openapi/v3/marketing/busifavor/users/{openid}/coupons/{coupon_code}/appids/{appid}) {colspan=2}
| [核销用户券](/openapi/v3/marketing/busifavor/coupons/use) {colspan=2}
| [发放消费卡](/openapi/v3/marketing/busifavor/coupons/{card_id}/send) {colspan=2}
| [营销补差付款](/openapi/v3/marketing/busifavor/subsidy/pay-receipts#post) {colspan=2}
| [查询营销补差付款单列表](/openapi/v3/marketing/busifavor/subsidy/pay-receipts#get) {colspan=2}
| [查询营销补差付款单详情](/openapi/v3/marketing/busifavor/subsidy/pay-receipts/{subsidy_receipt_id}) {colspan=2}
| [营销补差回退](/openapi/v3/marketing/busifavor/subsidy/return-receipts) {colspan=2}
| [查询营销补差回退单详情](/openapi/v3/marketing/busifavor/subsidy/return-receipts/{subsidy_return_receipt_id}) {colspan=2}
| 商品券v3{rowspan=23} | | [管理商品券事件通知地址](/openapi/v3/marketing/partner/product-coupon/notify-configs)
| | [图片上传](/openapi/v3/marketing/partner/product-coupon/media/upload-image)
| | [创建商品券](/openapi/v3/marketing/partner/product-coupon/product-coupons)
| | [修改商品券](/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}#post)
| | [查询商品券](/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}#get)
| | [失效商品券](/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/deactivate)
| | [添加商品券批次](/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks#post)
| | [查询商品券批次列表](/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks#get)
| | [修改商品券指定批次](/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}#post)
| | [查询商品券指定批次](/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}#get)
| | [修改商品券批次发放预算](/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/update-budget)
| | [失效商品券批次](/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/deactivate)
| | [预上传券Code](/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/upload-coupon-codes)
| | [批次关联门店](/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/associate-stores)
| | [查询批次关联门店列表](/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/associated-stores)
| | [批次取消关联门店](/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/disassociate-stores)
| | [向用户发放商品券](/openapi/v3/marketing/partner/product-coupon/users/{openid}/coupons#post)
| | [按券状态查询用户商品券](/openapi/v3/marketing/partner/product-coupon/users/{openid}/coupons#get)
| | [查询用户商品券详情](/openapi/v3/marketing/partner/product-coupon/users/{openid}/coupons/{coupon_code})
| | [确认发放用户商品券](/openapi/v3/marketing/partner/product-coupon/users/{openid}/coupons/{coupon_code}/confirm)
| | [核销用户商品券](/openapi/v3/marketing/partner/product-coupon/users/{openid}/coupons/{coupon_code}/use)
| | [失效用户商品券](/openapi/v3/marketing/partner/product-coupon/users/{openid}/coupons/{coupon_code}/deactivate)
| | [退券](/openapi/v3/marketing/partner/product-coupon/users/{openid}/coupons/{coupon_code}/return)
| 委托营销v3{rowspan=3} | [查询合作关系列表](/openapi/v3/marketing/partnerships) {colspan=2}
| [建立合作关系](/openapi/v3/marketing/partnerships/build) {colspan=2}
| [终止合作关系](/openapi/v3/marketing/partnerships/terminate) {colspan=2}
| 支付有礼v3{rowspan=8} | [获取活动列表](/openapi/v3/marketing/paygiftactivity/activities) {colspan=2}
| [查询活动详情](/openapi/v3/marketing/paygiftactivity/activities/{activity_id}) {colspan=2}
| [创建全场满额送活动](/openapi/v3/marketing/paygiftactivity/unique-threshold-activity) {colspan=2}
| [终止活动](/openapi/v3/marketing/paygiftactivity/activities/{activity_id}/terminate) {colspan=2}
| [查询活动指定商品列表](/openapi/v3/marketing/paygiftactivity/activities/{activity_id}/goods) {colspan=2}
| [查询活动发券商户号](/openapi/v3/marketing/paygiftactivity/activities/{activity_id}/merchants) {colspan=2}
| [新增活动发券商户号](/openapi/v3/marketing/paygiftactivity/activities/{activity_id}/merchants/add) {colspan=2}
| [删除活动发券商户号](/openapi/v3/marketing/paygiftactivity/activities/{activity_id}/merchants/delete) {colspan=2}
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
| 平台保证金v3 {rowspan=10} | | [请求售后赔付给用户](/openapi/v3/platsolution/ecommerce/mch-transfer/deposit-after-sales-compensation-bills)
| | [查询赔付用户结果(商户单号)](/openapi/v3/platsolution/ecommerce/mch-transfer/deposit-after-sales-compensation-bills/out-bill-no/{out_bill_no})
| | [查询赔付用户结果(微信单号)](/openapi/v3/platsolution/ecommerce/mch-transfer/deposit-after-sales-compensation-bills/bill-id/{bill_id})
| | [请求赔付给商户](/openapi/v3/platsolution/ecommerce/mch-transfer/transfer-bills)
| | [查询赔付商户结果(商户单号)](/openapi/v3/platsolution/ecommerce/mch-transfer/transfer-bills/out-bill-no/{out_bill_no})
| | [查询赔付商户结果(微信单号)](/openapi/v3/platsolution/ecommerce/mch-transfer/transfer-bills/bill-id/{bill_id})
| | [请求赔付用户运费](/openapi/v3/platsolution/ecommerce/mch-transfer/deposit-shipping-cost-compensation-bills)
| | [查询赔付运费结果](/openapi/v3/platsolution/ecommerce/mch-transfer/deposit-shipping-cost-compensation-bills/out-bill-no/{out_bill_no})
| | [发起赔付保司保费](/openapi/v3/platsolution/ecommerce/mch-transfer/deposit-insurance-premiums-compensation-bills)
| | [查询赔付保费结果](/openapi/v3/platsolution/ecommerce/mch-transfer/deposit-insurance-premiums-compensation-bills/{out_bill_no})
| 企业支付v3 {rowspan=12} | | [发起员工开通企业支付授权](/openapi/v3/webizpay/users/{user_id}/authorization-url)
| | [查询企业员工开通授权状态](/openapi/v3/webizpay/users/{user_id}/authorization-state)
| | [下发企业支付额度卡](/openapi/v3/webizpay/employees/{employee_id}/quota-cards)
| | [使用商户卡号查询额度卡](/openapi/v3/webizpay/employees/{employee_id}/out-quota-cards/{out_card_no})
| | [查询企业支付额度卡信息](/openapi/v3/webizpay/employees/{employee_id}/quota-cards/{card_no})
| | [作废员工企业支付额度卡](/openapi/v3/webizpay/employees/{employee_id}/quota-cards/{card_no}/cancel)
| | [获取指定额度卡支付链接](/openapi/v3/webizpay/employees/{employee_id}/quota-cards/{card_no}/payment-url)
| | [发起解除员工企业支付授权](/openapi/v3/webizpay/employees/{employee_id}/revoke)
| | [发起门店主体匹配](/openapi/v3/webizpay/stores/entity-matches)
| | [查询门店主体匹配结果](/openapi/v3/webizpay/stores/entity-matches/{batch_id})
| | [申请企业支付出资凭证](/openapi/v3/webizpay/bill/proof)
| | [申请企业支付业务账单](/openapi/v3/webizpay/bill/trade-bill)
| 公益捐赠v3 {rowspan=5} | | [申请公益捐赠预算](/openapi/v3/fund-app/mch-transfer/partner/charity-budget)
| | [查询公益捐赠预算详情](/openapi/v3/fund-app/mch-transfer/partner/charity-budget/{out_budget_no})
| | [解锁公益捐赠预算](/openapi/v3/fund-app/mch-transfer/partner/charity-budget/{out_budget_no}/unlock)
| | [发起公益捐赠付款](/openapi/v3/fund-app/mch-transfer/partner/charity-transfer-bills)
| | [查询公益捐赠付款详情](/openapi/v3/fund-app/mch-transfer/partner/charity-transfer-bills/out-transfer-no/{out_transfer_no})
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
| 商家转账v3{rowspan=10} | [发起商家转账](/openapi/v3/transfer/batches) | [发起商家转账](/openapi/v3/partner-transfer/batches)
| [查询批次单(平台批次单号)](/openapi/v3/transfer/batches/batch-id/{batch_id}) | [查询批次单(平台批次单号)](/openapi/v3/partner-transfer/batches/batch-id/{batch_id})
| [查询批次单(商家批次单号)](/openapi/v3/transfer/batches/out-batch-no/{out_batch_no}) | [查询批次单(商家批次单号)](/openapi/v3/partner-transfer/batches/out-batch-no/{out_batch_no})
| [查询明细单(平台批次单号)](/openapi/v3/transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}) | [查询明细单(平台批次单号)](/openapi/v3/partner-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id})
| [查询明细单(商家批次单号)](/openapi/v3/transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}) | [查询明细单(商家批次单号)](/openapi/v3/partner-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no})
| [申请转账账单电子回单](/openapi/v3/transfer/bill-receipt) {colspan=2}
| [查询账单回单受理结果](/openapi/v3/transfer/bill-receipt/{out_batch_no}) {colspan=2}
| [申请转账明细电子回单](/openapi/v3/transfer-detail/electronic-receipts#post) {colspan=2}
| [查询明细回单受理结果](/openapi/v3/transfer-detail/electronic-receipts#get) {colspan=2}
| [下载电子回单文件](/openapi/v3/transferdownload/signfile) {colspan=2}
| 商家转账v3<br/>(预约模式) {rowspan=13} | | [受理商家转账](/openapi/v3/platsolution/mch-transfer/batches/apply)
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
| 商家转账v3<br/>(用户确认模式) {rowspan=11} | | [申请子商户商家转账授权](/openapi/v3/fund-app/mch-transfer/partner/sub-mch-authorizations)
| | [查询子商户商家转账授权状态](/openapi/v3/fund-app/mch-transfer/partner/sub-mch-authorizations/{sub_mchid})
| [发起转账](/openapi/v3/fund-app/mch-transfer/transfer-bills) | [发起转账](/openapi/v3/fund-app/mch-transfer/partner/transfer-bills)
| [撤销转账](/openapi/v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}/cancel) | [撤销转账](/openapi/v3/fund-app/mch-transfer/partner/transfer-bills/out-bill-no/{out_bill_no}/cancel)
| [商户单号查询转账单](/openapi/v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}) | [商户单号查询转账单](/openapi/v3/fund-app/mch-transfer/partner/transfer-bills/out-bill-no/{out_bill_no})
| [微信转账单号查询转账单](/openapi/v3/fund-app/mch-transfer/transfer-bills/transfer-bill-no/{transfer_bill_no})
| [微信单号申请电子回单](/openapi/v3/fund-app/mch-transfer/elecsign/transfer-bill-no)
| [商户单号申请电子回单](/openapi/v3/fund-app/mch-transfer/elecsign/out-bill-no)
| [微信单号查询电子回单](/openapi/v3/fund-app/mch-transfer/elecsign/transfer-bill-no/{transfer_bill_no})
| [商户单号查询电子回单](/openapi/v3/fund-app/mch-transfer/elecsign/out-bill-no/{out_bill_no})
| [下载电子回单文件](/openapi/v3/transferdownload/elecvoucherfile)
| 商家转账v3<br/>(用户授权自动收款) {rowspan=5} | [发起转账并完成自动收款授权](/openapi/v3/fund-app/mch-transfer/transfer-bills/pre-transfer-with-authorization)
| [转账(用户自动收款)](/openapi/v3/fund-app/mch-transfer/transfer-bills/transfer)
| [申请免确认收款授权](/openapi/v3/fund-app/mch-transfer/user-confirm-authorization)
| [商户单号查询自动收款授权](/openapi/v3/fund-app/mch-transfer/user-confirm-authorization/out-authorization-no/{out_authorization_no})
| [解除免确认收款授权](/openapi/v3/fund-app/mch-transfer/user-confirm-authorization/out-authorization-no/{out_authorization_no}/close)
| 商家转账v3<br/>(互联QQ钱包) {rowspan=3} | [发起转账到QQ钱包](/openapi/v3/fund-app/mch-transfer/transfer-to-qq-wallet-bills)
| [撤销转账到QQ钱包](/openapi/v3/fund-app/mch-transfer/transfer-to-qq-wallet-bills/{out_bill_no}/cancel)
| [查询转账到QQ钱包的结果](/openapi/v3/fund-app/mch-transfer/transfer-to-qq-wallet-bills/{out_bill_no})
| 平台收付通v3{rowspan=7} | | [二级商户进件](/openapi/v3/ecommerce/applyments/)
| | [提交进件申请单(全托模式)](/openapi/v3/ecommerce/applyments/submit-account-hosting-applyment)
| | [平台代理签约核身](/openapi/v3/ecommerce/applyments/submit-sign-verify-info)
| | [查询进件状态(平台申请单号)](/openapi/v3/ecommerce/applyments/{applyment_id})
| | [查询进件状态(业务申请编号)](/openapi/v3/ecommerce/applyments/out-request-no/{out_request_no})
| | [撤销申请单(平台申请单号)](/openapi/v3/ecommerce/applyments/{applyment_id}/revoke)
| | [撤销申请单(业务申请编号)](/openapi/v3/ecommerce/applyments/out-request-no/{out_request_no}/revoke)
| 平台收付通v3<br/>补差 {rowspan=3} | | [请求补差](/openapi/v3/ecommerce/subsidies/create)
| | [取消补差](/openapi/v3/ecommerce/subsidies/cancel)
| | [请求补差回退](/openapi/v3/ecommerce/subsidies/return)
| 平台收付通v3<br/>分账 {rowspan=10} | | [添加分账接收方](/openapi/v3/ecommerce/profitsharing/receivers/add)
| | [删除分账接收方](/openapi/v3/ecommerce/profitsharing/receivers/delete)
| | [请求分账](/openapi/v3/ecommerce/profitsharing/orders#post)
| | [查询分账结果](/openapi/v3/ecommerce/profitsharing/orders#get)
| | [查询剩余待分金额](/openapi/v3/ecommerce/profitsharing/orders/{transaction_id}/amounts)
| | [完结分账](/openapi/v3/ecommerce/profitsharing/finish-order)
| | [请求分账回退](/openapi/v3/ecommerce/profitsharing/returnorders#post)
| | [查询分账回退结果](/openapi/v3/ecommerce/profitsharing/returnorders#get)
| | [请求售后服务分账](/openapi/v3/ecommerce/profitsharing/after-sales-orders#post)
| | [查询售后服务分账结果](/openapi/v3/ecommerce/profitsharing/after-sales-orders#get)
| 平台收付通v3<br/>退款 {rowspan=6} | | [发起退款申请](/openapi/v3/ecommerce/refunds/apply)
| | [查询退款(商户退款单号)](/openapi/v3/ecommerce/refunds/out-refund-no/{out_refund_no})
| | [查询退款(平台退款单号)](/openapi/v3/ecommerce/refunds/id/{refund_id})
| | [垫付退款回补](/openapi/v3/ecommerce/refunds/{refund_id}/return-advance#post)
| | [查询退款回补结果](/openapi/v3/ecommerce/refunds/{refund_id}/return-advance#get)
| | [发起异常退款](/openapi/v3/ecommerce/refunds/{refund_id}/apply-abnormal-refund)
| 平台收付通v3<br/>二级商户注销 {rowspan=7} | | [注销申请图片上传](/openapi/v3/ecommerce/account/cancel-applications/media)
| | [提交注销申请单](/openapi/v3/ecommerce/account/cancel-applications)
| | [查询注销单状态](/openapi/v3/ecommerce/account/cancel-applications/out-apply-no/{out_apply_no})
| | [平台代商户确认注销](/openapi/v3/ecommerce/account/apply-cancel-withdraw/confirm)
| | [申请销户号余额提现](/openapi/v3/mch_operate/risk/withdrawl-apply)
| | [查询销户号余额提现状态(商户提现单号)](/openapi/v3/mch_operate/risk/withdrawl-apply/out-request-no/{out_request_no})
| | [查询销户号余额提现状态(平台提现单号)](/openapi/v3/mch_operate/risk/withdrawl-apply/applyment-id/{applyment_id})
| 平台收付通v3<br/>二级商户充值 {rowspan=10} | | [申请二级商户充值](/openapi/v3/platsolution/ecommerce/recharges/apply)
| | [查询二级商户充值结果](/openapi/v3/platsolution/ecommerce/recharges/out-recharge-no/{out_recharge_no})
| | [关闭二级商户充值](/openapi/v3/platsolution/ecommerce/recharges/out-recharge-no/{out_recharge_no}/close)
| | [申请银行转账充值](/openapi/v3/platsolution/ecommerce/bank-transfer-recharges/apply)
| | [查询银行转账充值结果](/openapi/v3/platsolution/ecommerce/bank-transfer-recharges/out-recharge-no/{out_recharge_no})
| | [添加二级商户可扫码充值员工](/openapi/v3/platsolution/ecommerce/recharge-employees)
| | [删除二级商户可扫码充值员工](/openapi/v3/platsolution/ecommerce/recharge-employees/sub-mchid/{sub_mchid}/sp-openid/{sp_openid}/delete)
| | [查询二级商户可扫码充值员工列表](/openapi/v3/platsolution/ecommerce/recharge-employees/sub-mchid/{sub_mchid})
| | [开通保险理赔功能](/openapi/v3/platsolution/ecommerce/insurance-compensation-contracts)
| | [查询保险理赔功能开通状态](/openapi/v3/platsolution/ecommerce/insurance-compensation-contracts/sub-mchid/{sub_mchid}/check-opened)
| 平台收付通v3<br/>二级商户提现 {rowspan=6} | | [二级商户账户余额提现](/openapi/v3/ecommerce/fund/withdraw)
| | [查询提现结果(商户提现单号)](/openapi/v3/ecommerce/fund/withdraw/out-request-no/{out_request_no})
| | [查询提现结果(平台提现单号)](/openapi/v3/ecommerce/fund/withdraw/{withdraw_id})
| | [查询二级商户账户实时余额](/openapi/v3/ecommerce/fund/balance/{sub_mchid})
| | [查询二级商户账户日终余额](/openapi/v3/ecommerce/fund/enddaybalance/{sub_mchid})
| | [申请二级商户资金账单](/openapi/v3/ecommerce/bill/fundflowbill)
| 平台收付通v3<br/>跨境付款 {rowspan=6} | | [查询订单剩余可出境余额](/openapi/v3/funds-to-oversea/transactions/{transaction_id}/available_abroad_amounts)
| | [申请资金出境](/openapi/v3/funds-to-oversea/orders)
| | [查询出境结果](/openapi/v3/funds-to-oversea/orders/{out_order_id})
| | [获取购付汇账单](/openapi/v3/funds-to-oversea/bill-download-url)
| | [申请资金出境退回](/openapi/v3/funds-to-oversea/return/return-orders)
| | [查询出境退回结果](/openapi/v3/funds-to-oversea/return/return-orders/out-return-no/{out_return_no})
| 平台收付通v3<br/>免密支付 {rowspan=2} | | [免密支付-小程序预签约](/openapi/v3/password-exempt-contract/contracts/ecommerce/pre-entrust-sign/mini-program)
| | [免密支付-支付后预签约](/openapi/v3/password-exempt-contract/contracts/ecommerce/pre-entrust-sign/pay-redirect-sign)
| 平台收付通v3<br/>合单代扣 {rowspan=7} | | [合单代扣-APP方式预签约](/openapi/v3/ecommerce/combine-papay/contracts/pre-entrust-sign)
| | [合单代扣-小程序方式预签约](/openapi/v3/ecommerce/combine-papay/contracts/pre-entrust-sign/mini-program)
| | [合单代扣-通过商户协议号查询协议](/openapi/v3/ecommerce/combine-papay/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code})
| | [合单代扣-商户协议号解约协议](/openapi/v3/ecommerce/combine-papay/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}/terminate)
| | [合单代扣-撤销订单](/openapi/v3/ecommerce/combine-papay/transactions/{combine_out_trade_no}/reverse)
| | [合单代扣-查询订单](/openapi/v3/ecommerce/combine-papay/transactions/{combine_out_trade_no})
| | [合单代扣-发起免密支付](/openapi/v3/ecommerce/combine-papay/transactions)
| 平台收付通v3<br/>还款支付 {rowspan=3} | | [还款下单](/openapi/v3/repayment/combine-transactions/partner/prepay)
| | [还款单查询](/openapi/v3/repayment/combine-transactions/partner/out-trade-no/{combine_out_trade_no})
| | [商户关单](/openapi/v3/repayment/combine-transactions/partner/out-trade-no/{combine_out_trade_no}/close)
|平台收付通v3<br/>商家转账 {rowspan=6} | | [申请二级商户商家转账授权](/openapi/v3/ecommerce/mch-transfer/authorizations)
| | [查询二级商户商家转账授权状态](/openapi/v3/ecommerce/mch-transfer/authorizations/{sub_mchid})
| | [发起转账](/openapi/v3/ecommerce/mch-transfer/transfer-bills)
| | [撤销转账](/openapi/v3/ecommerce/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}/cancel)
| | [微信转账单号查询转账单](/openapi/v3/ecommerce/mch-transfer/transfer-bills/transfer-bill-no/{transfer_bill_no})
| | [商户单号查询转账单](/openapi/v3/ecommerce/mch-transfer/transfer-bills/out-bill-no/{out_bill_no})
|平台收付通v3<br/>预约商家转账 {rowspan=13} | | [受理单次预约](/openapi/v3/platsolution/insurance/mch-transfer/reservation/apply)
| | [关闭单次预约](/openapi/v3/platsolution/insurance/mch-transfer/reservation/out-reservation-no/{out_reservation_no}/close)
| | [平台单号查询预约记录](/openapi/v3/platsolution/insurance/mch-transfer/reservation/reservation-id/{reservation_id})
| | [商户单号查询预约记录](/openapi/v3/platsolution/insurance/mch-transfer/reservation/out-reservation-no/{out_reservation_no})
| | [受理商家转账](/openapi/v3/platsolution/insurance/mch-transfer/batches/apply)
| | [平台批次单号查询批次单](/openapi/v3/platsolution/insurance/mch-transfer/batches/batch-id/{batch_id})
| | [商户批次单号查询批次单](/openapi/v3/platsolution/insurance/mch-transfer/batches/out-batch-no/{out_batch_no})
| | [平台明细单号查询明细单](/openapi/v3/platsolution/insurance/mch-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id})
| | [商户明细单号查询明细单](/openapi/v3/platsolution/insurance/mch-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no})
| | [申请商家转账批次回单](/openapi/v3/platsolution/insurance/mch-transfer/batches/summary-receipts/out-batch-no/{out_batch_no}/apply)
| | [查询商家转账批次回单](/openapi/v3/platsolution/insurance/mch-transfer/batches/summary-receipts/out-batch-no/{out_batch_no})
| | [申请商家转账明细回单](/openapi/v3/platsolution/insurance/mch-transfer/batches/detail-receipts/out-batch-no/{out_batch_no}/out-detail-no/{out_detail_no}/apply)
| | [查询商家转账明细回单](/openapi/v3/platsolution/insurance/mch-transfer/batches/detail-receipts/out-batch-no/{out_batch_no}/out-detail-no/{out_detail_no})
| 平台收付通v3<br/>售后赔付 {rowspan=5} | | [请求赔付](/openapi/v3/platsolution/ecommerce/mch-transfer/compensate-bills)
| | [请求赔付预下单](/openapi/v3/platsolution/ecommerce/mch-transfer/compensate-bills/pre-transfer)
| | [请求撤销赔付](/openapi/v3/platsolution/ecommerce/mch-transfer/compensate-bills/out-bill-no/{out_bill_no}/cancel)
| | [查询赔付结果(按商户赔付单号)](/openapi/v3/platsolution/ecommerce/mch-transfer/compensate-bills/out-bill-no/{out_bill_no})
| | [查询赔付结果(微信支付赔付单号)](/openapi/v3/platsolution/ecommerce/mch-transfer/compensate-bills/bill-id/{bill_id})
| 平台收付通v3<br/>保险理赔 {rowspan=5} | | [请求保险理赔](/openapi/v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills)
| | [请求保险理赔预下单](/openapi/v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills/pre-transfer)
| | [请求撤销保险理赔](/openapi/v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills/out-bill-no/{out_bill_no}/cancel)
| | [查询保险理赔结果(按商户赔付单号)](/openapi/v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills/out-bill-no/{out_bill_no})
| | [查询保险理赔结果(按微信支付赔付单号)](/openapi/v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills/bill-id/{bill_id})
| 商户提现v3{rowspan=6} | | [合作伙伴预约提现](/openapi/v3/merchant/fund/withdraw)
| | [查询预约提现状态(商户单号)](/openapi/v3/merchant/fund/withdraw/out-request-no/{out_request_no})
| | [查询预约提现状态(平台单号)](/openapi/v3/merchant/fund/withdraw/withdraw-id/{withdraw_id})
| | [查询账户实时余额](/openapi/v3/merchant/fund/balance/{account_type})
| | [查询账户日终余额](/openapi/v3/merchant/fund/dayendbalance/{account_type})
| | [按日下载提现异常文件](/openapi/v3/merchant/fund/withdraw/bill-type/{bill_type})
| 来账识别v3{rowspan=2} | | [合作伙伴银行来账查询](/openapi/v3/merchantfund/merchant/income-records)
| | [二级商户银行来账查询](/openapi/v3/merchantfund/partner/income-records)
| 商户进件v3{rowspan=3} | | [提交进件申请单](/openapi/v3/applyment4sub/applyment/)
| | [查询进件状态(申请单号)](/openapi/v3/applyment4sub/applyment/applyment_id/{applyment_id})
| | [查询进件状态(业务申请编号)](/openapi/v3/applyment4sub/applyment/business_code/{business_code})
| 资料变更v3{rowspan=4} | | [提交资料变更申请单](/openapi/v3/mchalterapply/mchsubjectalterapplyment)
| | [查询变更申请单状态(申请单号)](/openapi/v3/mchalterapply/mchsubjectalterapplyment/{apply_id})
| | [查询变更申请单状态(业务单号)](/openapi/v3/mchalterapply/mchsubjectalterapplyment/merchant/{merchant_code}/out-request-no/{out_request_no})
| | [撤销资料变更申请单](/openapi/v3/mchalterapply/mchsubjectalterapplyment/{apply_id}/revoke)
| 超管变更v3{rowspan=4} | | [提交超管变更申请单](/openapi/v3/mchalterapply/mchcontactalterapplyment)
| | [查询超管变更申请单状态(申请单号)](/openapi/v3/mchalterapply/mchcontactalterapplyment/{apply_id})
| | [查询超管变更申请单状态(业务单号)](/openapi/v3/mchalterapply/mchcontactalterapplyment/merchant/{merchant_code}/out-request-no/{out_request_no})
| | [撤销超管变更申请单](/openapi/v3/mchalterapply/mchcontactalterapplyment/{apply_id}/revoke)
| 结算账户v3{rowspan=3} | | [查询结算账户](/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/settlement)
| | [修改结算账户](/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/modify-settlement)
| | [查询结算账户修改状态](/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/application/{application_no})
| 确认开户意愿v3{rowspan=5} | | [查询商户确认状态](/openapi/v3/apply4subject/applyment/merchants/{sub_mchid}/state)
| | [提交商户申请单](/openapi/v3/apply4subject/applyment#post)
| | [查询申请单审核结果](/openapi/v3/apply4subject/applyment#get)
| | [撤销申请单(申请单编号)](/openapi/v3/apply4subject/applyment/{applyment_id}/cancel)
| | [撤销申请单(业务申请编号)](/openapi/v3/apply4subject/applyment/{business_code}/cancel)
| 文件上传v3{rowspan=2} | | [商户图片文件上传](/openapi/v3/merchant/media/upload)
| | [商户视频文件上传](/openapi/v3/merchant/media/video_upload)
| 商户风险管理v3{rowspan=10} | [创建接收违规通知的URL](/openapi/v3/merchant-risk-manage/violation-notifications#post) {colspan=2}
| [查询接收违规通知的URL](/openapi/v3/merchant-risk-manage/violation-notifications#get) {colspan=2}
| [修改接收违规通知的URL](/openapi/v3/merchant-risk-manage/violation-notifications#put) {colspan=2}
| [删除接收违规通知的URL](/openapi/v3/merchant-risk-manage/violation-notifications#delete) {colspan=2}
| [上报订单关联信息](/openapi/v3/merchant-risk-manage/report-trade-union-information) {colspan=2}
| [处置结果回传](/openapi/v3/merchant-risk-manage/trade-risk-result) {colspan=2}
| [查询风险信息](/openapi/v3/merchant-risk-manage/trade-risk-information) {colspan=2}
| | [查询子商户管控情况](/openapi/v3/mch-operation-manage/merchant-limitations/sub-mchid/{sub_mchid})
| [查询风险订单](/openapi/v3/merchant-risk-manage/ec-trade-risk/query-risk-trades) {colspan=2}
| [回传处置结果](/openapi/v3/merchant-risk-manage/ec-trade-risk/recv-dispose-result) {colspan=2}
| 商户尽职调查v3{rowspan=3} | | [提交尽调资料](/openapi/v3/mch-operation-manage/enhanced-due-diligence/{due_diligence_id}/submit)
| | [上传尽调资料文件](/openapi/v3/mch-operation-manage/enhanced-due-diligence/{due_diligence_id}/upload)
| | [查询子商户强化尽调单信息](/openapi/v3/mch-operation-manage/enhanced-due-diligence/{due_diligence_id})
| 商户管理记录v3{rowspan=8} | | [列表查询子商户被管控记录](/openapi/v3/mch-manage/mch-manage-records/sub-mchid/{sub_mchid})
| | [查询子商户被管控记录详情](/openapi/v3/mch-manage/mch-manage-records/{manage_record_id})
| | [上传商户提交资料文件](/openapi/v3/mch-manage/submission-files/sub-mchid/{sub_mchid}/upload)
| | [对指定被管控记录提交资料](/openapi/v3/mch-manage/mch-manage-records/{manage_record_id}/mch-manage-submissions)
| | [查询交易拦截记录列表](/openapi/v3/transaction-block/transaction-block-records/sub-mchid/{sub_mchid})
| | [查询交易拦截记录详情](/openapi/v3/transaction-block/transaction-block-records/{block_record_id})
| | [发起交易拦截申诉](/openapi/v3/transaction-block/transaction-block-submissions/sub-mchid/{sub_mchid})
| | [查询交易拦截申诉详情](/openapi/v3/transaction-block/transaction-block-submissions/{block_submission_id})
| 商户身份核实v3{rowspan=2} | | [发起不活跃商户身份核实](/openapi/v3/compliance/inactive-merchant-identity-verification/merchants)
| | [查询不活跃商户身份核实结果](/openapi/v3/compliance/inactive-merchant-identity-verification/merchants/{sub_mchid}/verifications/{verification_id})
| 银行组件v3{rowspan=6} | | [查询省份列表](/openapi/v3/capital/capitallhh/areas/provinces)
| | [查询城市列表](/openapi/v3/capital/capitallhh/areas/provinces/{province_code}/cities)
| | [查询支行列表](/openapi/v3/capital/capitallhh/banks/{bank_alias_code}/branches)
| | [查询支持对公业务的银行列表](/openapi/v3/capital/capitallhh/banks/corporate-banking)
| | [查询支持个人业务的银行列表](/openapi/v3/capital/capitallhh/banks/personal-banking)
| | [获取对私银行卡号开户银行](/openapi/v3/capital/capitallhh/banks/search-banks-by-bank-account)
| 消费者投诉v3{rowspan=16} | [创建投诉通知回调](/openapi/v3/merchant-service/complaint-notifications#post) {colspan=2}
| [查询投诉通知回调](/openapi/v3/merchant-service/complaint-notifications#get) {colspan=2}
| [修改投诉通知回调](/openapi/v3/merchant-service/complaint-notifications#put) {colspan=2}
| [删除投诉通知回调](/openapi/v3/merchant-service/complaint-notifications#delete) {colspan=2}
| [查询投诉单列表](/openapi/v3/merchant-service/complaints-v2) {colspan=2}
| [查询投诉单详情](/openapi/v3/merchant-service/complaints-v2/{complaint_id}) {colspan=2}
| [查询投诉单协商历史](/openapi/v3/merchant-service/complaints-v2/{complaint_id}/negotiation-historys) {colspan=2}
| [回复用户](/openapi/v3/merchant-service/complaints-v2/{complaint_id}/response) {colspan=2}
| [反馈处理完成](/openapi/v3/merchant-service/complaints-v2/{complaint_id}/complete) {colspan=2}
| [更新退款审批结果](/openapi/v3/merchant-service/complaints-v2/{complaint_id}/update-refund-progress) {colspan=2}
| [上传商户反馈图片文件](/openapi/v3/merchant-service/images/upload) {colspan=2}
| [投诉单详情图片文件下载](/openapi/v3/merchant-service/images/{media_id}) {colspan=2}
| [~~查询投诉信息列表~~](/openapi/v3/merchant-service/complaints) :no_entry_sign: {colspan=2}
| [~~查询投诉详情详情~~](/openapi/v3/merchant-service/complaints/{transaction_id}) :no_entry_sign: {colspan=2}
| [~~查询投诉单协商历史~~](/openapi/v3/merchant-service/complaints/{transaction_id}/negotiation-historys) :no_entry_sign: {colspan=2}
| [~~商户反馈~~](/openapi/v3/merchant-service/feedbacks) :no_entry_sign: {colspan=2}
| 委托代扣v3{rowspan=11} | [JSAPI场景预约扣费预签约](/openapi/v3/papay/scheduled-deduct-sign/contracts/pre-entrust-sign/jsapi) | [JSAPI场景预约扣费预签约](/openapi/v3/papay/scheduled-deduct-sign/partner/contracts/pre-entrust-sign/jsapi)
| [App场景预约扣费预签约](/openapi/v3/papay/scheduled-deduct-sign/contracts/pre-entrust-sign/app) | [App场景预约扣费预签约](/openapi/v3/papay/scheduled-deduct-sign/partner/contracts/pre-entrust-sign/app)
| [H5场景预约扣费预签约](/openapi/v3/papay/scheduled-deduct-sign/contracts/pre-entrust-sign/h5) | [H5场景预约扣费预签约](/openapi/v3/papay/scheduled-deduct-sign/partner/contracts/pre-entrust-sign/h5)
| [小程序场景预约扣费预签约](/openapi/v3/papay/scheduled-deduct-sign/contracts/pre-entrust-sign/mini-program) | [小程序场景预约扣费预签约](/openapi/v3/papay/scheduled-deduct-sign/partner/contracts/pre-entrust-sign/mini-program)
| [通过商户协议号查询签约协议](/openapi/v3/papay/sign/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}) | [通过商户协议号查询签约协议](/openapi/v3/papay/sign/partner/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code})
| [通过商户协议号解除签约协议](/openapi/v3/papay/sign/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}/terminate) | [通过商户协议号解除签约协议](/openapi/v3/papay/sign/partner/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}/terminate)
| [预约扣费](/openapi/v3/papay/pay/schedules/contract-id/{contract_id}/schedule) | [预约扣费](/openapi/v3/papay/pay/partner/schedules/contract-id/{contract_id}/schedule)
| [查询扣费预约](/openapi/v3/papay/pay/schedules/contract-id/{contract_id}) | [查询扣费预约](/openapi/v3/papay/pay/partner/schedules/contract-id/{contract_id})
| [发送预扣费通知](/openapi/v3/papay/contracts/{contract_id}/notify) | [发送预扣费通知](/openapi/v3/partner-papay/contracts/{contract_id}/notify)
| [受理扣款](/openapi/v3/papay/pay/transactions/apply) | [受理扣款](/openapi/v3/papay/pay/partner/transactions/apply)
| [重试扣费通知](/openapi/v3/papay/contracts/{contract_id}/fail-notify) | [重试扣费通知](/openapi/v3/partner-papay/contracts/{contract_id}/fail-notify)
| 保险委托代扣v3{rowspan=12} | [查询保险自动续费预约](/openapi/v3/papay/insurance-pay/policy-periods/contract-id/{contract_id}/policy-period-id/{policy_period_id})
| [预约保险自动续费](/openapi/v3/papay/insurance-pay/policy-periods/contract-id/{contract_id}/policy-period-id/{policy_period_id}/schedule)
| [受理保险自动续费扣款](/openapi/v3/papay/insurance-pay/transactions/apply)
| [受理续期自动续费协议](/openapi/v3/papay/insurance-sign/contracts/plan-id/{plan_id}/contract-id/{contract_id}/renew)
| [查询保险自动续费协议](/openapi/v3/papay/insurance-sign/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code})
| [解除保险自动续费协议](/openapi/v3/papay/insurance-sign/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}/terminate)
| [查询保险扣费周期列表](/openapi/v3/papay/insurance-sign/policy_periods/plan-id/{plan_id}/out-contract-code/{out_contract_code})
| [修改保险扣费周期列表](/openapi/v3/papay/insurance-sign/policy-periods/plan-id/{plan_id}/contract-id/{contract_id}/modify)
| [App预签约](/openapi/v3/papay/insurance-sign/contracts/pre-entrust-sign/app)
| [H5预签约](/openapi/v3/papay/insurance-sign/contracts/pre-entrust-sign/h5)
| [JSAPI预签约](/openapi/v3/papay/insurance-sign/contracts/pre-entrust-sign/jsapi)
| [小程序预签约](/openapi/v3/papay/insurance-sign/contracts/pre-entrust-sign/mini-program)
| 鸿蒙委托代扣v3{rowspan=3} | [代扣预签约](/openapi/v3/papay/sign/contracts/pre-entrust-sign)
| [通过商户协议号查询签约协议](/openapi/v3/papay/sign/contracts/harmony-plan-id/{plan_id}/out-contract-code/{out_contract_code})
| [代扣受理扣款](/openapi/v3/papay/pay/harmony/transactions/apply)
| 校园轻松付v3{rowspan=8} | | [查询用户签约列表](/openapi/v3/eduschoolpay/users/{openid}/contracts)
| | [预签约](/openapi/v3/eduschoolpay/contracts/presign)
| | [商户主动解约](/openapi/v3/eduschoolpay/contracts/{contract_id}/terminate)
| | [通过协议号查询签约信息](/openapi/v3/eduschoolpay/contracts/{contract_id})
| | [使用签约协议号发起扣款](/openapi/v3/eduschoolpay/transactions)
| | [通过商户订单号查单](/openapi/v3/eduschoolpay/transactions/out-trade-no/{out_trade_no})
| | [通过微信支付订单号查单](/openapi/v3/eduschoolpay/transactions/id/{transaction_id})
| | [查询用户欠款状态](/openapi/v3/eduschoolpay/users/{openid}/debt-state)
| 教育续费通v3{rowspan=8} | [预签约](/openapi/v3/edu-papay/contracts/presign) {colspan=2}
| [通过协议号查询签约](/openapi/v3/edu-papay/contracts/id/{contract_id}) {colspan=2}
| [通过用户标识查询签约](/openapi/v3/edu-papay/user/{openid}/contracts) {colspan=2}
| [商户主动发起解约](/openapi/v3/edu-papay/contracts/{contract_id}) {colspan=2}
| [通过商户订单号查单](/openapi/v3/edu-papay/transactions/out-trade-no/{out_trade_no}) {colspan=2}
| [通过微信订单号查单](/openapi/v3/edu-papay/transactions/id/{transaction_id}) {colspan=2}
| [给用户发送扣款预通知](/openapi/v3/edu-papay/user-notifications/{contract_id}/send) {colspan=2}
| [受理扣款](/openapi/v3/edu-papay/transactions) {colspan=2}
| 停车服务v3{rowspan=4} | [查询车牌服务开通信息](/openapi/v3/vehicle/parking/services/find) {colspan=2}
| [创建停车入场](/openapi/v3/vehicle/parking/parkings) {colspan=2}
| [扣费受理](/openapi/v3/vehicle/transactions/parking) {colspan=2}
| [查询订单](/openapi/v3/vehicle/transactions/out-trade-no/{out_trade_no}) {colspan=2}
| ETC授权v3{rowspan=6} | | [查询ETC签约状态](/openapi/v3/vehicle/etc/users/{openid}/contracts)
| | [通过商户ETC绑定号查询签约状态](/openapi/v3/vehicle/etc/contracts/{contract_id})
| | [预开通用户ETC扣费](/openapi/v3/vehicle/etc/preopen)
| | [通过商户订单号查询订单](/openapi/v3/vehicle/etc/transactions/out-trade-no/{out_trade_no})
| | [通过微信订单号查询订单](/openapi/v3/vehicle/etc/transactions/id/{transaction_id})
| | [高速场景商户扣款](/openapi/v3/vehicle/etc/transactions/highway)
| 微信支付分v3{rowspan=24} | [创建支付分订单](/openapi/v3/payscore/serviceorder#post) | [创建支付分订单](/openapi/v3/payscore/partner/serviceorder#post)
| [查询支付分订单](/openapi/v3/payscore/serviceorder#get) | [查询支付分订单](/openapi/v3/payscore/partner/serviceorder#get)
| [取消支付分订单](/openapi/v3/payscore/serviceorder/{out_order_no}/cancel) | [取消支付分订单](/openapi/v3/payscore/partner/serviceorder/{out_order_no}/cancel)
| [修改支付分金额](/openapi/v3/payscore/serviceorder/{out_order_no}/modify) | [修改支付分金额](/openapi/v3/payscore/partner/serviceorder/{out_order_no}/modify)
| [完结支付分订单](/openapi/v3/payscore/serviceorder/{out_order_no}/complete) | [完结支付分订单](/openapi/v3/payscore/partner/serviceorder/{out_order_no}/complete)
| [同步支付分订单](/openapi/v3/payscore/serviceorder/{out_order_no}/sync) | [同步支付分订单](/openapi/v3/payscore/partner/serviceorder/{out_order_no}/sync)
| [请求支付分催收](/openapi/v3/payscore/serviceorder/{out_order_no}/pay) | [请求支付分催收](/openapi/v3/payscore/partner/serviceorder/{out_order_no}/pay)
| [下发服务预扣费消息](/openapi/v3/payscore/serviceorder/{out_order_no}/send-prepaidmessage) | [下发服务预扣费消息](/openapi/v3/payscore/partner/serviceorder/{out_order_no}/send-prepaidmessage)
| [下发服务费用待处理消息](/openapi/v3/payscore/serviceorder/{out_order_no}/send-pendingmessage) | [下发服务费用待处理消息](/openapi/v3/payscore/partner/serviceorder/{out_order_no}/send-pendingmessage)
| [评估用户分层](/openapi/v3/payscore/permissions/assess-user-risk-level) | [评估用户分层](/openapi/v3/payscore/partner/permissions/assess-user-risk-level)
| | [支付场景中预授权](/openapi/v3/payscore/partner/permissions/apply-for-scene)
| [创建先用后付订单](/openapi/v3/payscore/servicepayondeliveryorder) | [创建先用后付订单](/openapi/v3/payscore/partner/servicepayondeliveryorder)
| [商户预授权(免确认)](/openapi/v3/payscore/permissions) | [商户预授权(免确认)](/openapi/v3/payscore/partner/permissions)
| [查询授权状态(CODE)(免确认)](/openapi/v3/payscore/permissions/authorization-code/{authorization_code}) | [查询授权状态(CODE)(免确认)](/openapi/v3/payscore/partner/permissions/authorization-code/{authorization_code})
| [查询授权状态(OPENID)(免确认)](/openapi/v3/payscore/permissions/openid/{openid}) | [查询授权状态(OPENID)(免确认)](/openapi/v3/payscore/partner/permissions/search)
| [查询授权状态](/openapi/v3/payscore/user-service-state)
| [解除用户授权(CODE)(免确认)](/openapi/v3/payscore/permissions/authorization-code/{authorization_code}/terminate)| [解除用户授权(CODE)(免确认)](/openapi/v3/payscore/partner/permissions/authorization-code/{authorization_code}/terminate)
| [解除用户授权(OPENID)(免确认)](/openapi/v3/payscore/permissions/openid/{openid}/terminate) | [解除用户授权(OPENID)(免确认)](/openapi/v3/payscore/partner/permissions/terminate)
| [解除用户授权](/openapi/v3/payscore/users/{openid}/permissions/{service_id}/terminate)
| [创单结单合并(免确认)](/openapi/v3/payscore/serviceorder/direct-complete) | [创单结单合并(免确认)](/openapi/v3/payscore/partner/serviceorder/direct-complete)
| | [查询先享金额分层](/openapi/v3/payscore/partner/servicequotas/service-id/{service_id})
| | [申请绑定支付分服务](/openapi/v3/payscore/partner/service-account-applications)
| | [查询支付分绑定结果](/openapi/v3/payscore/partner/service-account-applications/{out_apply_no})
| [申请对账单](/openapi/v3/payscore/merchant-bill) {colspan=2}
| 支付分签约计划v3{rowspan=7}|[创建支付分计划](/openapi/v3/payscore/plan/payscore-plans) | [创建支付分计划](/openapi/v3/payscore/plan/partner/payscore-plans)
| [查询支付分计划](/openapi/v3/payscore/plan/payscore-plans/merchant-plan-no/{merchant_plan_no}) | [查询支付分计划](/openapi/v3/payscore/plan/partner/payscore-plans/merchant-plan-no/{merchant_plan_no})
| [停止支付分计划](/openapi/v3/payscore/plan/payscore-plans/merchant-plan-no/{merchant_plan_no}/stop) | [停止支付分计划](/openapi/v3/payscore/plan/partner/payscore-plans/merchant-plan-no/{merchant_plan_no}/stop)
| [创建用户的签约计划](/openapi/v3/payscore/sign-plan/user-sign-plans) | [创建用户的签约计划](/openapi/v3/payscore/sign-plan/partner/user-sign-plans)
| [查询用户的签约计划](/openapi/v3/payscore/sign-plan/user-sign-plans/merchant-sign-plan-no/{merchant_sign_plan_no}) | [查询用户的签约计划](/openapi/v3/payscore/sign-plan/partner/user-sign-plans/merchant-sign-plan-no/{merchant_sign_plan_no})
| [取消用户的签约计划](/openapi/v3/payscore/sign-plan/user-sign-plans/merchant-sign-plan-no/{merchant_sign_plan_no}/stop) | [取消用户的签约计划](/openapi/v3/payscore/sign-plan/partner/user-sign-plans/merchant-sign-plan-no/{merchant_sign_plan_no}/stop)
| [创建用户签约计划的服务单](/openapi/v3/payscore/sign-plan/serviceorder) | [创建用户签约计划的服务单](/openapi/v3/payscore/sign-plan/partner/serviceorder)
| 智慧零售v3{rowspan=4} | [创建订单](/openapi/v3/payscore/smartretail-orders#post)
| [查询订单](/openapi/v3/payscore/smartretail-orders#get)
| [撤销订单](/openapi/v3/payscore/smartretail-orders/{out_order_no}/cancel)
| [完结订单](/openapi/v3/payscore/smartretail-orders/{out_order_no}/complete)
| 先享后付v3{rowspan=5} | [创建订单](/openapi/v3/payscore/payafter-orders#post)
| [查询订单](/openapi/v3/payscore/payafter-orders#get)
| [撤销订单](/openapi/v3/payscore/payafter-orders/{out_order_no}/cancel)
| [完结订单](/openapi/v3/payscore/payafter-orders/{out_order_no}/complete)
| [同步订单](/openapi/v3/payscore/payafter-orders/{out_order_no}/sync)
| 微信先享卡v3{rowspan=6} | [预受理领卡请求](/openapi/v3/discount-card/cards)
| [查询先享卡订单](/openapi/v3/discount-card/cards/{out_card_code})
| [更新先享卡订单](/openapi/v3/discount-card/orders/{out_order_no}#patch)
| [通过先享卡订单号查询订单](/openapi/v3/discount-card/orders/{out_order_no}#get)
| [通过商户订单号查询订单](/openapi/v3/discount-card/orders/out-trade-no/{out_trade_no})
| [增加用户记录](/openapi/v3/discount-card/cards/{out_card_code}/add-user-records)
| 充电宝隔夜归还v3{rowspan=4} | [查询用户保险订单领取资格](/openapi/v3/hire-power-bank/user-qualifications/{openid})
| [查询用户保险订单领取资格](/openapi/v3/hire-power-bank/insurance-orders)
| [创建保险订单](/openapi/v3/hire-power-bank/insurance-orders)
| [查询保险订单详情](/openapi/v3/hire-power-bank/insurance-orders/{out_order_no})
| 扫码点餐v3{rowspan=1} | | [点餐订单信息同步](/openapi/v3/catering/orders/sync-status)
| 微信寄快递v3{rowspan=1} | | [用户openid转换](/openapi/v3/express/users/{openid}/transform) :eye_speech_bubble:
| 出行券v3{rowspan=1} | [出行券切卡组件预下单](/openapi/v3/industry-coupon/tokens)
| 刷码乘车v3{rowspan=3} | [查询用户服务可用信息](/openapi/v3/qrcode/user-services/contract-id/{contract_id}) {colspan=2}
| [扣费受理](/openapi/v3/qrcode/transactions) {colspan=2}
| [查询订单](/openapi/v3/qrcode/transactions/out-trade-no/{out_trade_no}) {colspan=2}
| 爱心餐v3{rowspan=3} | [查询爱心餐品牌信息](/openapi/v3/lovefeast/brands/{brand_id}) {colspan=2}
| [查询用户捐赠单列表](/openapi/v3/lovefeast/users/{openid}/orders/brand-id/{brand_id}) {colspan=2}
| [查询用户捐赠单详情](/openapi/v3/lovefeast/users/{openid}/orders/out-trade-no/{out_trade_no}) {colspan=2}
| 清关报关v3{rowspan=5} | [提交报关申请](/openapi/v3/global/customs/orders#post)
| [查询报关信息](/openapi/v3/global/customs/orders#get)
| [修改报关信息](/openapi/v3/global/customs/orders#patch)
| [重推报关信息](/openapi/v3/global/customs/redeclare)
| [身份信息校验](/openapi/v3/global/customs/verify-certificate)
| 平台证书v3{rowspan=1} | [获取平台证书列表](/openapi/v3/certificates) {colspan=2}

{.im-table}
