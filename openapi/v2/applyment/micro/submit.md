---
title: 申请入驻
description: 使用申请入驻接口提交你的小微商户资料，申请后一般5分钟左右可以查询到具体的申请结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2023.05.23` (北京时间)下线，文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| version {data-required data-indent=1} | string | 接口版本号
| cert_sn {data-required data-indent=1} | string | 平台证书序列号
| mch_id {data-required data-indent=1} | string | 商户号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| business_code {data-required data-indent=1} | string | 业务申请编号
| id_card_copy {data-required data-indent=1} | string | 身份证人像面照片
| id_card_national {data-required data-indent=1} | string | 身份证国徽面照片
| id_card_name {data-required data-indent=1} | string | 身份证姓名
| id_card_number {data-required data-indent=1} | string | 身份证号码
| id_card_valid_time {data-required data-indent=1} | string | 身份证有效期限`JSON`格式字符串
| {colspan=3 .im-table-line}
| period {data-required data-indent=2} | string[] | 有效期限
| account_name {data-required data-indent=1} | string | 开户名称
| account_bank {data-required data-indent=1} | string | 开户银行
| bank_address_code {data-required data-indent=1} | string | 开户银行省市编码
| bank_name {data-indent=1} | string | 开户银行全称（含支行）
| account_number {data-required data-indent=1} | string | 银行账号
| store_name {data-required data-indent=1} | string | 门店名称
| store_address_code {data-required data-indent=1} | string | 门店省市编码
| store_street {data-required data-indent=1} | string | 门店街道名称
| store_longitude {data-indent=1} | string | 门店经度
| store_latitude {data-indent=1} | string | 门店纬度
| store_entrance_pic {data-required data-indent=1} | string | 门店门口照片
| indoor_pic {data-required data-indent=1} | string | 店内环境照片
| address_certification {data-indent=1} | string | 经营场地证明
| merchant_shortname {data-required data-indent=1} | string | 商户简称
| service_phone {data-required data-indent=1} | string | 客服电话
| product_desc {data-required data-indent=1} | string | 售卖商品/提供服务描述
| rate {data-required data-indent=1} | string | 费率
| business_addition_desc {data-indent=1} | string | 补充说明
| business_addition_pics {data-indent=1} | string | 补充材料
| {colspan=3 .im-table-line}
| media_id {data-required data-indent=2} | string[] | 图片列表
| contact {data-required data-indent=1} | string | 超级管理员姓名
| contact_phone {data-required data-indent=1} | string | 手机号码
| contact_email {data-indent=1} | string | 联系邮箱
| security {data-required} | `true` | 声明加载商户API证书

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->applyment->micro->submit->postAsync([
  'xml' => [
    'version' => '3.0',
    'cert_sn' => '5663476TEREGD45FH63GDFHFG657FCHBFG',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'business_code' => '123456',
    'id_card_copy' => '',
    'id_card_national' => '',
    'id_card_name' => '佑佑',
    'id_card_number' => '',
    'id_card_valid_time' => '["1970-01-01","长期"]',
    'account_name' => '',
    'account_bank' => '工商银行',
    'bank_address_code' => '110000',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_number' => '',
    'store_name' => '',
    'store_address_code' => '110000',
    'store_street' => '',
    'store_longitude' => '113.941355',
    'store_latitude' => '22.546245',
    'store_entrance_pic' => '',
    'indoor_pic' => '',
    'address_certification' => '',
    'merchant_shortname' => '',
    'service_phone' => '',
    'product_desc' => '',
    'rate' => '0.6%',
    'business_addition_desc' => '',
    'business_addition_pics' => '["123","456"]',
    'contact' => '',
    'contact_phone' => '',
    'contact_email' => '',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/applyment/micro/submit')->postAsync([
  'xml' => [
    'version' => '3.0',
    'cert_sn' => '5663476TEREGD45FH63GDFHFG657FCHBFG',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'business_code' => '123456',
    'id_card_copy' => '',
    'id_card_national' => '',
    'id_card_name' => '佑佑',
    'id_card_number' => '',
    'id_card_valid_time' => '["1970-01-01","长期"]',
    'account_name' => '',
    'account_bank' => '工商银行',
    'bank_address_code' => '110000',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_number' => '',
    'store_name' => '',
    'store_address_code' => '110000',
    'store_street' => '',
    'store_longitude' => '113.941355',
    'store_latitude' => '22.546245',
    'store_entrance_pic' => '',
    'indoor_pic' => '',
    'address_certification' => '',
    'merchant_shortname' => '',
    'service_phone' => '',
    'product_desc' => '',
    'rate' => '0.6%',
    'business_addition_desc' => '',
    'business_addition_pics' => '["123","456"]',
    'contact' => '',
    'contact_phone' => '',
    'contact_email' => '',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/applyment/micro/submit']->postAsync([
  'xml' => [
    'version' => '3.0',
    'cert_sn' => '5663476TEREGD45FH63GDFHFG657FCHBFG',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'business_code' => '123456',
    'id_card_copy' => '',
    'id_card_national' => '',
    'id_card_name' => '佑佑',
    'id_card_number' => '',
    'id_card_valid_time' => '["1970-01-01","长期"]',
    'account_name' => '',
    'account_bank' => '工商银行',
    'bank_address_code' => '110000',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_number' => '',
    'store_name' => '',
    'store_address_code' => '110000',
    'store_street' => '',
    'store_longitude' => '113.941355',
    'store_latitude' => '22.546245',
    'store_entrance_pic' => '',
    'indoor_pic' => '',
    'address_certification' => '',
    'merchant_shortname' => '',
    'service_phone' => '',
    'product_desc' => '',
    'rate' => '0.6%',
    'business_addition_desc' => '',
    'business_addition_pics' => '["123","456"]',
    'contact' => '',
    'contact_phone' => '',
    'contact_email' => '',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->applyment->micro->submit->post([
  'xml' => [
    'version' => '3.0',
    'cert_sn' => '5663476TEREGD45FH63GDFHFG657FCHBFG',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'business_code' => '123456',
    'id_card_copy' => '',
    'id_card_national' => '',
    'id_card_name' => '佑佑',
    'id_card_number' => '',
    'id_card_valid_time' => '["1970-01-01","长期"]',
    'account_name' => '',
    'account_bank' => '工商银行',
    'bank_address_code' => '110000',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_number' => '',
    'store_name' => '',
    'store_address_code' => '110000',
    'store_street' => '',
    'store_longitude' => '113.941355',
    'store_latitude' => '22.546245',
    'store_entrance_pic' => '',
    'indoor_pic' => '',
    'address_certification' => '',
    'merchant_shortname' => '',
    'service_phone' => '',
    'product_desc' => '',
    'rate' => '0.6%',
    'business_addition_desc' => '',
    'business_addition_pics' => '["123","456"]',
    'contact' => '',
    'contact_phone' => '',
    'contact_email' => '',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/applyment/micro/submit')->post([
  'xml' => [
    'version' => '3.0',
    'cert_sn' => '5663476TEREGD45FH63GDFHFG657FCHBFG',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'business_code' => '123456',
    'id_card_copy' => '',
    'id_card_national' => '',
    'id_card_name' => '佑佑',
    'id_card_number' => '',
    'id_card_valid_time' => '["1970-01-01","长期"]',
    'account_name' => '',
    'account_bank' => '工商银行',
    'bank_address_code' => '110000',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_number' => '',
    'store_name' => '',
    'store_address_code' => '110000',
    'store_street' => '',
    'store_longitude' => '113.941355',
    'store_latitude' => '22.546245',
    'store_entrance_pic' => '',
    'indoor_pic' => '',
    'address_certification' => '',
    'merchant_shortname' => '',
    'service_phone' => '',
    'product_desc' => '',
    'rate' => '0.6%',
    'business_addition_desc' => '',
    'business_addition_pics' => '["123","456"]',
    'contact' => '',
    'contact_phone' => '',
    'contact_email' => '',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/applyment/micro/submit']->post([
  'xml' => [
    'version' => '3.0',
    'cert_sn' => '5663476TEREGD45FH63GDFHFG657FCHBFG',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'business_code' => '123456',
    'id_card_copy' => '',
    'id_card_national' => '',
    'id_card_name' => '佑佑',
    'id_card_number' => '',
    'id_card_valid_time' => '["1970-01-01","长期"]',
    'account_name' => '',
    'account_bank' => '工商银行',
    'bank_address_code' => '110000',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_number' => '',
    'store_name' => '',
    'store_address_code' => '110000',
    'store_street' => '',
    'store_longitude' => '113.941355',
    'store_latitude' => '22.546245',
    'store_entrance_pic' => '',
    'indoor_pic' => '',
    'address_certification' => '',
    'merchant_shortname' => '',
    'service_phone' => '',
    'product_desc' => '',
    'rate' => '0.6%',
    'business_addition_desc' => '',
    'business_addition_pics' => '["123","456"]',
    'contact' => '',
    'contact_phone' => '',
    'contact_email' => '',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required}| string | 返回状态码
| return_msg | string | 返回信息
| nonce_str {data-required}| string | 随机字符串
| sign {data-required}| string | 签名
| result_code {data-required}| string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| err_param | string | 参数校验不通过的字段名
| applyment_id {data-required}| string | 商户申请单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=19_2)
