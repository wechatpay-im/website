---
title: 回调通知概览
description: 后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信会判定本次通知失败，重新发送通知，直到成功为止。这里通知发送可能会多台服务器进行发送，且发送时间可能会在几秒内，但微信不保证通知最终一定能成功。商户系统必须能够正确处理重复的通知。
head:
  - - meta
    - name: keywords
      content: 微信支付, 回调通知事件, WeChatPay webhook events
prev:
  text: 开放接口
  link: /openapi/
next:
  text: 软件开发包
  link: /devkit/
---

| 通知格式 | 直连商户模式 | 合作伙伴模式
| :------: | :----------: | :----------:
| XML {rowspan=3} | [普通支付通知](/webhook/v2/transaction-success) {colspan=2}
| [合单支付通知](/webhook/v2/combined-transactions-success) :closed_lock_with_key: {colspan=2}
| [退款结果通知](/webhook/v2/refund-processed) {colspan=2}
| XML {rowspan=1} | [车牌状态变更通知](/webhook/v2/vehicle-state-changed-for-parking) {colspan=2}
| XML {rowspan=1} | [签/解约扣款服务通知](/webhook/v2/pap-contract-state-changed) {colspan=2}
| XML {rowspan=4} | [免压租借/速住用户成功确认订单通知](/webhook/v2/CHECK.SUCCESS)
| [免压租借/速住用户确认订单失败通知](/webhook/v2/CHECK.FAIL)
| [免压租借/速住用户支付成功订单通知](/webhook/v2/TRANSACTION.SUCCESS)
| [免压租借/速住用户支付订单失败通知](/webhook/v2/TRANSACTION.FAIL)
| JSON {rowspan=3} | [普通支付通知](/webhook/v3/TRANSACTION.SUCCESS#BASIC) {colspan=2}
| [服务商支付通知](/webhook/v3/TRANSACTION.SUCCESS#PARTNER) {colspan=2}
| [合单支付通知](/webhook/v3/TRANSACTION.SUCCESS#COMBINE) {colspan=2}
| JSON {rowspan=3} | [退款成功通知](/webhook/v3/REFUND.SUCCESS) {colspan=2}
| [退款异常通知](/webhook/v3/REFUND.ABNORMAL) {colspan=2}
| [退款关闭通知](/webhook/v3/REFUND.CLOSED) {colspan=2}
| JSON {rowspan=2} | [分账成功通知](/webhook/v3/PROFITSHARING.SUCCESS) {colspan=2}
| [分账回退通知](/webhook/v3/PROFITSHARING.RETURN) {colspan=2}
| JSON {rowspan=3} | [会员卡领卡事件通知](/webhook/v3/MEMBERCARD.ACCEPT_CARD) {colspan=2}
| [会员卡激活事件通知](/webhook/v3/MEMBERCARD.ACTIVATE_CARD) {colspan=2}
| [用户管理会员卡事件通知](/webhook/v3/MEMBERCARD.USERCARD_MANAGE) {colspan=2}
| JSON {rowspan=3} | [商圈会员积分服务授权结果通知](/webhook/v3/MALL_AUTH.ACTIVATE_CARD) {colspan=2}
| [商圈会员支付结果通知](/webhook/v3/MALL_TRANSACTION.SUCCESS) {colspan=2}
| [商圈会员退款成功通知](/webhook/v3/MALL_REFUND.SUCCESS) {colspan=2}
| JSON {rowspan=1} | [核销事件回调通知](/webhook/v3/COUPON.USE) {colspan=2}
| JSON {rowspan=1} | [领券事件回调通知](/webhook/v3/COUPON.SEND) {colspan=2}
| JSON {rowspan=5} | [用户发票抬头填写完成通知](/webhook/v3/FAPIAO.USER_APPLIED) {colspan=2}
| [发票卡券作废通知](/webhook/v3/FAPIAO.CARD_DISCARDED) {colspan=2}
| [发票插入用户卡包成功通知](/webhook/v3/FAPIAO.CARD_INSERTED) {colspan=2}
| [发票开具成功通知](/webhook/v3/FAPIAO.ISSUED) {colspan=2}
| [发票冲红成功通知](/webhook/v3/FAPIAO.REVERSED) {colspan=2}
| JSON {rowspan=1} | | [企业支付关系授权完成通知](/webhook/v3/WEBIZPAY.AUTHORIZED)
| JSON {rowspan=2} | | [用户开通商家名片会员卡事件通知](/webhook/v3/MEMBERCARDSP.USER_CARD.CREATE)
| | [用户删除商家名片会员卡事件通知](/webhook/v3/MEMBERCARDSP.USER_CARD.DELETE)
| JSON {rowspan=3} | [商家转账批次完成通知](/webhook/v3/MCHTRANSFER.BATCH.FINISHED)
| [商家转账批次关闭通知](/webhook/v3/MCHTRANSFER.BATCH.CLOSED)
| [商家转账单据终态通知](/webhook/v3/MCHTRANSFER.BILL.FINISHED)
| JSON {rowspan=2} | [用户确认自动收款授权通知](/webhook/v3/MCHTRANSFER.AUTHORIZATION.CONFIRMED)
| [用户关闭自动收款授权通知](/webhook/v3/MCHTRANSFER.AUTHORIZATION.CLOSED)
| JSON {rowspan=1} | [转账到QQ钱包终态通知](/webhook/v3/MCHTRANSFER.QQWALLETBILL.FINISHED)
| JSON {rowspan=1} | | [预约提现状态变更通知](/webhook/v3/MCHWITHDRAW.CHANGE)
| JSON {rowspan=2} | | [收付通合单代扣签约成功通知](/webhook/v3/ECOMMERCE_ENTRUST.SIGN)
| | [收付通合单代扣解约成功通知](/webhook/v3/ECOMMERCE_ENTRUST.TERMINATE)
| JSON {rowspan=3} | | [收付通充值成功通知](/webhook/v3/RECHARGE.SUCCESS)
| | [收付通关闭充值通知](/webhook/v3/RECHARGE.CLOSED)
| | [收付通充值资金退回通知](/webhook/v3/RECHARGE.FUND_RETURNED)
| JSON {rowspan=2} | [产生新投诉通知](/webhook/v3/COMPLAINT.CREATE) {colspan=2}
| [投诉状态变化通知](/webhook/v3/COMPLAINT.STATE_CHANGE) {colspan=2}
| JSON {rowspan=3} | [委托代扣签约成功通知](/webhook/v3/ENTRUST.SIGN) {colspan=2}
| [委托代扣解约问询通知](/webhook/v3/ENTRUST.TERMINATE_INQUIRY)
| [委托代扣解约成功通知](/webhook/v3/ENTRUST.TERMINATE) {colspan=2}
| JSON {rowspan=5} | [保险商户委托代扣签约成功通知](/webhook/v3/INSURANCE_ENTRUST.SIGN)
| [保险商户委托代扣解约成功通知](/webhook/v3/INSURANCE_ENTRUST.TERMINATE)
| [保险商户委托代扣续期完成通知](/webhook/v3/INSURANCE_ENTRUST.RENEW)
| [保险商户委托代扣成功支付通知](/webhook/v3/TRANSACTION.SUCCESS#INSURANCE_ENTRUST)
| [保险商户委托代扣支付失败通知](/webhook/v3/TRANSACTION.FAIL#INSURANCE_ENTRUST)
| JSON {rowspan=6} | | [校园轻松付用户签约成功通知](/webhook/v3/PAYSCORE.USER_OPEN_SERVICE#EDUSCHOOLPAY)
| | [校园轻松付用户解约成功通知](/webhook/v3/PAYSCORE.USER_CLOSE_SERVICE#EDUSCHOOLPAY)
| | [校园轻松付订单支付成功通知](/webhook/v3/TRANSACTION.INDUSTRY_SUCCESS)
| | [校园轻松付订单支付失败通知](/webhook/v3/TRANSACTION.INDUSTRY_FAILED)
| | [校园轻松付用户欠款状态变化通知](/webhook/v3/EDU_SCHOOL_PAY.USER_DEBT_STATE_UPDATE)
| | [校园轻松付用户还款通知](/webhook/v3/TRANSACTION.PAY_BACK#EDUSCHOOLPAY)
| JSON {rowspan=2} | [教育续费通签约成功通知](/webhook/v3/ENTRUST.SIGNING) {colspan=2}
| [教育续费通解约成功通知](/webhook/v3/ENTRUST.RELEASE) {colspan=2}
| JSON {rowspan=1} | [刷脸支付-用户签约状态变更回调通知](/webhook/v3/FACEPAY.USER_STATE_CHANGE) {colspan=2}
| JSON {rowspan=4} | [停车入场状态变更通知](/webhook/v3/VEHICLE.ENTRANCE_STATE_CHANGE) {colspan=2}
| [停车服务订单支付成功通知](/webhook/v3/TRANSACTION.SUCCESS#PARKING) {colspan=2}
| [停车服务订单支付失败通知](/webhook/v3/TRANSACTION.FAIL#PARKING) {colspan=2}
| [停车服务用户还款通知](/webhook/v3/TRANSACTION.PAY_BACK#PARKING) {colspan=2}
| JSON {rowspan=1} | | [ETC授权签约状态变化通知](/webhook/v3/VEHICLE.USER_STATE_CHANGE)
| JSON {rowspan=5} | [支付分服务用户授权成功通知](/webhook/v3/PAYSCORE.USER_OPEN_SERVICE) {colspan=2}
| [支付分服务用户解除授权通知](/webhook/v3/PAYSCORE.USER_CLOSE_SERVICE) {colspan=2}
| [支付分服务用户确认成功通知](/webhook/v3/PAYSCORE.USER_CONFIRM) {colspan=2}
| [支付分服务用户支付成功通知](/webhook/v3/PAYSCORE.USER_PAID) {colspan=2}
| | [支付分服务账户绑定结果通知](/webhook/v3/PAYSCORE.BIND_SERVICE_ACCOUNT)
| JSON {rowspan=2} | [用户签约计划成功通知](/webhook/v3/PAYSCORE.USER_SIGN_PLAN) {colspan=2}
| [用户取消已签约的计划通知](/webhook/v3/PAYSCORE.USER_CANCEL_SIGN_PLAN) {colspan=2}
| JSON {rowspan=1} | [智慧零售/先享后付确认订单通知](/webhook/v3/PAYSCORE.USER_ACCEPTED)
| JSON {rowspan=5} | [先享卡用户领卡通知(预受理领卡)](/webhook/v3/DISCOUNT_CARD.USER_ACCEPTED)
| [先享卡用户领卡通知(模板配置)](/webhook/v3/DISCOUNT_CARD.GET_CARD)
| [先享卡守约状态变化通知](/webhook/v3/DISCOUNT_CARD.AGREEMENT_ENDED)
| [先享卡扣费状态变化通知](/webhook/v3/DISCOUNT_CARD.USER_PAID)
| [先享卡用户结算通知](/webhook/v3/DISCOUNT_CARD.SETTLEMENT)
| JSON {rowspan=1} | [隔夜归还保险订单状态变化通知](/webhook/v3/HIRE_POWER_BANK.RECEIVE_INSURANCE)
| JSON {rowspan=4} | [风险订单回调通知](/webhook/v3/RISKTRADE.IDENTIFICATION) {colspan=2}
| | [处罚二级商户通知](/webhook/v3/VIOLATION.PUNISH)
| | [拦截二级商户通知](/webhook/v3/VIOLATION.INTERCEPT)
| | [二级商户申诉通知](/webhook/v3/VIOLATION.APPEAL)
| JSON {rowspan=5} | [跨境/全球-H5支付权限申请事件回调通知](/webhook/v3/APPLYMENT_STATE.APPROVED) {colspan=2}
| [跨境/全球-支付成功通知](/webhook/v3/TRANSACTION.SUCCESS#GLOBAL) {colspan=2}
| [跨境/全球-退款成功通知](/webhook/v3/REFUND.SUCCESS#GLOBAL) {colspan=2}
| [跨境/全球-委托代扣签约成功通知](/webhook/v3/PAPAY.SIGN) {colspan=2}
| [跨境/全球-委托代扣解约成功通知](/webhook/v3/PAPAY.TERMINATE) {colspan=2}

{.im-table}
