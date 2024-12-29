---
title: 修改子商户
description: 用于机构子商户创建成功后，接口提供子商户信息修改。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| modifyinstitutionsub {data-required} | string | 固定值`modifyInstitutionsub`
| security {data-required} | `true` | 声明加载商户API证书
| nonceless {data-required} | `true` | 声明请求的`XML`无随机字符串参数
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| app_id {data-required data-indent=1} | string | 机构appid
| mch_id {data-required data-indent=1} | string | 机构商户号
| sub_mch_id {data-required data-indent=1} | string | 子商户号
| merchant_name {data-required data-indent=1} | string | 子商户全称
| channel_id {data-indent=1} | string | 渠道编号
| merchant_shortname {data-required data-indent=1} | string | 子商户简称
| merchant_country_code {data-required data-indent=1} | string | 注册国家或区域
| merchant_type {data-required data-indent=1} | string | 商户类型<br/>`ENTERPRISE` \| `INDIVIDUAL` 枚举值之一
| business_category {data-required data-indent=1} | string | 业务类目
| mcc {data-required data-indent=1} | string | MCC码
| registration_certificate_number {data-required data-indent=1} | string | 公司注册文件编号
| registration_certificate_date {data-required data-indent=1} | string | 公司注册文件过期时间
| registration_certificate_copy {data-indent=1} | string | 公司注册文件照片
| business_type {data-required data-indent=1} | string | 业务类型<br/>`ONLINE` \| `OFFLINE` \| `BOTH` 枚举值之一
| app_download {data-required data-indent=1} | string | APP下载链接
| business_website {data-required data-indent=1} | string | 业务网站
| office_account {data-required data-indent=1} | string | 公众号
| mini_program {data-required data-indent=1} | string | 小程序
| store_address {data-required data-indent=1} | string | 门店地址
| store_photos {data-indent=1} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 门店照片
| {colspan=3 .im-table-line}
| media_id {data-required data-indent=2} | string[] | 门店照片列表
| director_name {data-indent=1} | string | 董事姓名
| director_id_number {data-indent=1} | string | 董事证件号码
| principal_name {data-indent=1} | string | 负责人姓名
| principal_id_number {data-indent=1} | string | 负责人证件号
| office_phone {data-required data-indent=1} | string | 公司电话
| contact_name {data-required data-indent=1} | string | 联系人姓名
| contact_phone {data-required data-indent=1} | string | 联系人电话
| contact_email {data-required data-indent=1} | string | 联系人邮箱
| settlement_bank_number {data-indent=1} | string | 子商户结算银行账户
| apply_h5_payment {data-indent=1} | string | 是否申请H5支付权限<br/>`YES` \| `NO` 枚举值之一
| h5_website_url {data-indent=1} | string | H5经营网址
| h5_domains {data-indent=1} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | H5支付域名
| {colspan=3 .im-table-line}
| domain {data-required data-indent=2} | string[] | 域名列表

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->secapi->mch->_modifyinstitutionsub_->postAsync([
  'modifyinstitutionsub' => 'modifyInstitutionsub', // 固定参数(URI上有大写字符)
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'app_id'                          => 'wx8888888888888888',
    'mch_id'                          => '3200000001',
    'sub_mch_id'                      => '12345678',
    'merchant_name'                   => 'Merchantname',
    'channel_id'                      => '101',
    'merchant_shortname'              => 'Merchantshortname',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'business_category'               => '343',
    'mcc'                             => '4214',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'business_type'                   => 'BOTH',
    'app_download'                    => 'https://download.qq.com',
    'business_website'                => 'https://www.qq.com',
    'office_account'                  => 'wx8888888888888888',
    'mini_program'                    => 'wx8888888888888888',
    'store_address'                   => '广东省深圳市南山区科技中一道10000号',
    'store_photos'                    => \json_encode([
      'Media_id1',
      'Media_id2',
      'Media_id3',
    ]),
    'director_name'                   => 'BobZhang',
    'director_id_number'              => '5555—8888',
    'principal_name'                  => 'BobZhang',
    'principal_id_number'             => '5555—8888',
    'office_phone'                    => '075586010000',
    'contact_name'                    => '李先生',
    'contact_phone'                   => '075586010000',
    'contact_email'                   => 'test@test.com',
    'settlement_bank_number'          => '555588889999',
    'apply_h5_payment'                => 'YES',
    'h5_website_url'                  => 'https://qq.com',
    'h5_domains'                      => \json_encode([
      'www.qq.com',
      'www.weixin.com',
    ]),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/secapi/mch/{modifyinstitutionsub}')->postAsync([
  'modifyinstitutionsub' => 'modifyInstitutionsub', // 固定参数(URI上有大写字符)
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'app_id'                          => 'wx8888888888888888',
    'mch_id'                          => '3200000001',
    'sub_mch_id'                      => '12345678',
    'merchant_name'                   => 'Merchantname',
    'channel_id'                      => '101',
    'merchant_shortname'              => 'Merchantshortname',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'business_category'               => '343',
    'mcc'                             => '4214',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'business_type'                   => 'BOTH',
    'app_download'                    => 'https://download.qq.com',
    'business_website'                => 'https://www.qq.com',
    'office_account'                  => 'wx8888888888888888',
    'mini_program'                    => 'wx8888888888888888',
    'store_address'                   => '广东省深圳市南山区科技中一道10000号',
    'store_photos'                    => \json_encode([
      'Media_id1',
      'Media_id2',
      'Media_id3',
    ]),
    'director_name'                   => 'BobZhang',
    'director_id_number'              => '5555—8888',
    'principal_name'                  => 'BobZhang',
    'principal_id_number'             => '5555—8888',
    'office_phone'                    => '075586010000',
    'contact_name'                    => '李先生',
    'contact_phone'                   => '075586010000',
    'contact_email'                   => 'test@test.com',
    'settlement_bank_number'          => '555588889999',
    'apply_h5_payment'                => 'YES',
    'h5_website_url'                  => 'https://qq.com',
    'h5_domains'                      => \json_encode([
      'www.qq.com',
      'www.weixin.com',
    ]),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/secapi/mch/{modifyinstitutionsub}']->postAsync([
  'modifyinstitutionsub' => 'modifyInstitutionsub', // 固定参数(URI上有大写字符)
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'app_id'                          => 'wx8888888888888888',
    'mch_id'                          => '3200000001',
    'sub_mch_id'                      => '12345678',
    'merchant_name'                   => 'Merchantname',
    'channel_id'                      => '101',
    'merchant_shortname'              => 'Merchantshortname',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'business_category'               => '343',
    'mcc'                             => '4214',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'business_type'                   => 'BOTH',
    'app_download'                    => 'https://download.qq.com',
    'business_website'                => 'https://www.qq.com',
    'office_account'                  => 'wx8888888888888888',
    'mini_program'                    => 'wx8888888888888888',
    'store_address'                   => '广东省深圳市南山区科技中一道10000号',
    'store_photos'                    => \json_encode([
      'Media_id1',
      'Media_id2',
      'Media_id3',
    ]),
    'director_name'                   => 'BobZhang',
    'director_id_number'              => '5555—8888',
    'principal_name'                  => 'BobZhang',
    'principal_id_number'             => '5555—8888',
    'office_phone'                    => '075586010000',
    'contact_name'                    => '李先生',
    'contact_phone'                   => '075586010000',
    'contact_email'                   => 'test@test.com',
    'settlement_bank_number'          => '555588889999',
    'apply_h5_payment'                => 'YES',
    'h5_website_url'                  => 'https://qq.com',
    'h5_domains'                      => \json_encode([
      'www.qq.com',
      'www.weixin.com',
    ]),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->secapi->mch->_modifyinstitutionsub_->post([
  'modifyinstitutionsub' => 'modifyInstitutionsub', // 固定参数(URI上有大写字符)
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'app_id'                          => 'wx8888888888888888',
    'mch_id'                          => '3200000001',
    'sub_mch_id'                      => '12345678',
    'merchant_name'                   => 'Merchantname',
    'channel_id'                      => '101',
    'merchant_shortname'              => 'Merchantshortname',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'business_category'               => '343',
    'mcc'                             => '4214',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'business_type'                   => 'BOTH',
    'app_download'                    => 'https://download.qq.com',
    'business_website'                => 'https://www.qq.com',
    'office_account'                  => 'wx8888888888888888',
    'mini_program'                    => 'wx8888888888888888',
    'store_address'                   => '广东省深圳市南山区科技中一道10000号',
    'store_photos'                    => \json_encode([
      'Media_id1',
      'Media_id2',
      'Media_id3',
    ]),
    'director_name'                   => 'BobZhang',
    'director_id_number'              => '5555—8888',
    'principal_name'                  => 'BobZhang',
    'principal_id_number'             => '5555—8888',
    'office_phone'                    => '075586010000',
    'contact_name'                    => '李先生',
    'contact_phone'                   => '075586010000',
    'contact_email'                   => 'test@test.com',
    'settlement_bank_number'          => '555588889999',
    'apply_h5_payment'                => 'YES',
    'h5_website_url'                  => 'https://qq.com',
    'h5_domains'                      => \json_encode([
      'www.qq.com',
      'www.weixin.com',
    ]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/secapi/mch/{modifyinstitutionsub}')->post([
  'modifyinstitutionsub' => 'modifyInstitutionsub', // 固定参数(URI上有大写字符)
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'app_id'                          => 'wx8888888888888888',
    'mch_id'                          => '3200000001',
    'sub_mch_id'                      => '12345678',
    'merchant_name'                   => 'Merchantname',
    'channel_id'                      => '101',
    'merchant_shortname'              => 'Merchantshortname',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'business_category'               => '343',
    'mcc'                             => '4214',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'business_type'                   => 'BOTH',
    'app_download'                    => 'https://download.qq.com',
    'business_website'                => 'https://www.qq.com',
    'office_account'                  => 'wx8888888888888888',
    'mini_program'                    => 'wx8888888888888888',
    'store_address'                   => '广东省深圳市南山区科技中一道10000号',
    'store_photos'                    => \json_encode([
      'Media_id1',
      'Media_id2',
      'Media_id3',
    ]),
    'director_name'                   => 'BobZhang',
    'director_id_number'              => '5555—8888',
    'principal_name'                  => 'BobZhang',
    'principal_id_number'             => '5555—8888',
    'office_phone'                    => '075586010000',
    'contact_name'                    => '李先生',
    'contact_phone'                   => '075586010000',
    'contact_email'                   => 'test@test.com',
    'settlement_bank_number'          => '555588889999',
    'apply_h5_payment'                => 'YES',
    'h5_website_url'                  => 'https://qq.com',
    'h5_domains'                      => \json_encode([
      'www.qq.com',
      'www.weixin.com',
    ]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/secapi/mch/{modifyinstitutionsub}']->post([
  'modifyinstitutionsub' => 'modifyInstitutionsub', // 固定参数(URI上有大写字符)
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'app_id'                          => 'wx8888888888888888',
    'mch_id'                          => '3200000001',
    'sub_mch_id'                      => '12345678',
    'merchant_name'                   => 'Merchantname',
    'channel_id'                      => '101',
    'merchant_shortname'              => 'Merchantshortname',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'business_category'               => '343',
    'mcc'                             => '4214',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'business_type'                   => 'BOTH',
    'app_download'                    => 'https://download.qq.com',
    'business_website'                => 'https://www.qq.com',
    'office_account'                  => 'wx8888888888888888',
    'mini_program'                    => 'wx8888888888888888',
    'store_address'                   => '广东省深圳市南山区科技中一道10000号',
    'store_photos'                    => \json_encode([
      'Media_id1',
      'Media_id2',
      'Media_id3',
    ]),
    'director_name'                   => 'BobZhang',
    'director_id_number'              => '5555—8888',
    'principal_name'                  => 'BobZhang',
    'principal_id_number'             => '5555—8888',
    'office_phone'                    => '075586010000',
    'contact_name'                    => '李先生',
    'contact_phone'                   => '075586010000',
    'contact_email'                   => 'test@test.com',
    'settlement_bank_number'          => '555588889999',
    'apply_h5_payment'                => 'YES',
    'h5_website_url'                  => 'https://qq.com',
    'h5_domains'                      => \json_encode([
      'www.qq.com',
      'www.weixin.com',
    ]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| result_code {data-required} | string | 业务返回码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误编码
| err_code_des | string | 错误描述
| sub_mch_id {data-required} | string | 子商户号
| sign {data-required} | string | 签名
| verification_status | string | 验证状态<br/>`Under review` \| `Approved` 枚举值之一
| h5_authorization_state | string | H5支付权限状态<br/>`APPROVED` \| `UNAUTHORIZED` \| `UNDER_REVIEW` \| `REJECTED` \| `UNDER_PUNISHMENT` \| `APPLICATION_FAILED` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/sub_merchant_entry/chapter3_3.shtml)
