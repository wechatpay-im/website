# 子商户进件（融合钱包） {#post}

机构提交子商户资料，微信支付系统会为每个子商户创建子商户号。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json | object | 声明请求的`JSON`数据结构
| sp_appid {data-indent=1} | string | 机构appid
| sp_mchid {data-indent=1} | string | 机构商户号
| name {data-indent=1} | string | 子商户全称
| shortname {data-indent=1} | string | 子商户简称
| office_phone {data-indent=1} | string | 公司电话
| contact {data-indent=1} | object | 联系人信息
| name {data-indent=2} | string | 联系人名称
| phone {data-indent=2} | string | 联系人电话
| email {data-indent=2} | string | 联系人邮箱
| business_category {data-indent=1} | integer | 类目
| channel_id {data-indent=1} | string | 渠道号
| merchant_country_code {data-indent=1} | string | 注册国家或区域
| merchant_type {data-indent=1} | string | 商户类型
| registration_certificate_number {data-indent=1} | string | 公司注册文件编号
| registration_certificate_date {data-indent=1} | string | 公司注册文件过期时间
| registration_certificate_copy {data-indent=1} | string | 公司注册文件照片
| settlement_bank_number {data-indent=1} | string | 子商户银行结算账户信息
| business {data-indent=1} | object | 业务信息
| business_type {data-indent=2} | string | 业务类型
| app_download {data-indent=2} | string | APP下载链接
| website {data-indent=2} | string | 业务网站
| office_account {data-indent=2} | string | 公众号
| mini_program {data-indent=2} | string | 小程序
| store_address {data-indent=2} | string | 门店地址
| store_photos {data-indent=2} | string | 门店照片
| mcc {data-indent=2} | string | MCC码
| director {data-indent=1} | object | 董事信息
| name {data-indent=2} | string | 董事姓名
| number {data-indent=2} | string | 董事证件号
| principal {data-indent=1} | object | 负责人信息
| name {data-indent=2} | string | 负责人姓名
| number {data-indent=2} | string | 负责人证件号
| headers | object | 声明请求的头参数
| Idempotency-Key {data-indent=1} | string | 由商户侧生成的唯一key，用来标识多次重试是否为同一请求
| Wechatpay-Serial {data-indent=1} | string | 微信支付平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->merchants->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'name' => 'Merchant name',
    'shortname' => 'Merchant shortname',
    'office_phone' => '075586010000',
    'contact' => [
      'name' => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category' => 644,
    'channel_id' => '3200000001',
    'merchant_country_code' => '344',
    'merchant_type' => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date' => '2020-10-16',
    'registration_certificate_copy' => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number' => '555588889999',
    'business' => [
      'business_type' => 'BOTH',
      'app_download' => 'https://download.qq.com',
      'website' => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program' => 'wx8888888888888888',
      'store_address' => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos' => '[Media_id1, Media_id2, Media_id3]',
      'mcc' => '4214',
    ],
    'director' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
    'principal' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => 'GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/merchants')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'name' => 'Merchant name',
    'shortname' => 'Merchant shortname',
    'office_phone' => '075586010000',
    'contact' => [
      'name' => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category' => 644,
    'channel_id' => '3200000001',
    'merchant_country_code' => '344',
    'merchant_type' => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date' => '2020-10-16',
    'registration_certificate_copy' => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number' => '555588889999',
    'business' => [
      'business_type' => 'BOTH',
      'app_download' => 'https://download.qq.com',
      'website' => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program' => 'wx8888888888888888',
      'store_address' => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos' => '[Media_id1, Media_id2, Media_id3]',
      'mcc' => '4214',
    ],
    'director' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
    'principal' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => 'GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/merchants']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'name' => 'Merchant name',
    'shortname' => 'Merchant shortname',
    'office_phone' => '075586010000',
    'contact' => [
      'name' => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category' => 644,
    'channel_id' => '3200000001',
    'merchant_country_code' => '344',
    'merchant_type' => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date' => '2020-10-16',
    'registration_certificate_copy' => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number' => '555588889999',
    'business' => [
      'business_type' => 'BOTH',
      'app_download' => 'https://download.qq.com',
      'website' => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program' => 'wx8888888888888888',
      'store_address' => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos' => '[Media_id1, Media_id2, Media_id3]',
      'mcc' => '4214',
    ],
    'director' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
    'principal' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => 'GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->merchants->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'name' => 'Merchant name',
    'shortname' => 'Merchant shortname',
    'office_phone' => '075586010000',
    'contact' => [
      'name' => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category' => 644,
    'channel_id' => '3200000001',
    'merchant_country_code' => '344',
    'merchant_type' => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date' => '2020-10-16',
    'registration_certificate_copy' => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number' => '555588889999',
    'business' => [
      'business_type' => 'BOTH',
      'app_download' => 'https://download.qq.com',
      'website' => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program' => 'wx8888888888888888',
      'store_address' => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos' => '[Media_id1, Media_id2, Media_id3]',
      'mcc' => '4214',
    ],
    'director' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
    'principal' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => 'GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/merchants')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'name' => 'Merchant name',
    'shortname' => 'Merchant shortname',
    'office_phone' => '075586010000',
    'contact' => [
      'name' => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category' => 644,
    'channel_id' => '3200000001',
    'merchant_country_code' => '344',
    'merchant_type' => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date' => '2020-10-16',
    'registration_certificate_copy' => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number' => '555588889999',
    'business' => [
      'business_type' => 'BOTH',
      'app_download' => 'https://download.qq.com',
      'website' => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program' => 'wx8888888888888888',
      'store_address' => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos' => '[Media_id1, Media_id2, Media_id3]',
      'mcc' => '4214',
    ],
    'director' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
    'principal' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => 'GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/merchants']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'name' => 'Merchant name',
    'shortname' => 'Merchant shortname',
    'office_phone' => '075586010000',
    'contact' => [
      'name' => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category' => 644,
    'channel_id' => '3200000001',
    'merchant_country_code' => '344',
    'merchant_type' => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date' => '2020-10-16',
    'registration_certificate_copy' => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number' => '555588889999',
    'business' => [
      'business_type' => 'BOTH',
      'app_download' => 'https://download.qq.com',
      'website' => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program' => 'wx8888888888888888',
      'store_address' => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos' => '[Media_id1, Media_id2, Media_id3]',
      'mcc' => '4214',
    ],
    'director' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
    'principal' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => 'GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 子商户号
| verification_status | string | 验证状态
| description | string | 验证状态描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_2_1.shtml)

# 修改子商户（融合钱包） {#put}

用于机构子商户创建成功后，接口提供子商户信息修改

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json | object | 声明请求的`JSON`数据结构
| sp_appid {data-indent=1} | string | 机构appid
| sp_mchid {data-indent=1} | string | 机构商户号
| sub_mchid {data-indent=1} | string | 子商户号
| name {data-indent=1} | string | 子商户全称
| shortname {data-indent=1} | string | 子商户简称
| office_phone {data-indent=1} | string | 公司电话
| contact {data-indent=1} | object | 联系人信息
| name {data-indent=2} | string | 联系人名称
| phone {data-indent=2} | string | 联系人电话
| email {data-indent=2} | string | 联系人邮箱
| business_category {data-indent=1} | integer | 类目
| channel_id {data-indent=1} | string | 渠道号
| merchant_country_code {data-indent=1} | string | 注册国家或区域
| merchant_type {data-indent=1} | string | 商户类型
| registration_certificate_number {data-indent=1} | string | 公司注册文件编号
| registration_certificate_date {data-indent=1} | string | 公司注册文件过期时间
| registration_certificate_copy {data-indent=1} | string | 公司注册文件照片
| settlement_bank_number {data-indent=1} | string | 子商户银行结算账户信息
| business {data-indent=1} | object | 业务信息
| business_type {data-indent=2} | string | 业务类型
| app_download {data-indent=2} | string | APP下载链接
| website {data-indent=2} | string | 业务网站
| office_account {data-indent=2} | string | 公众号
| mini_program {data-indent=2} | string | 小程序
| store_address {data-indent=2} | string | 门店地址
| store_photos {data-indent=2} | string | 门店照片
| mcc {data-indent=2} | string | MCC码
| director {data-indent=1} | object | 董事信息
| name {data-indent=2} | string | 董事姓名
| number {data-indent=2} | string | 董事证件号
| principal {data-indent=1} | object | 负责人信息
| name {data-indent=2} | string | 负责人姓名
| number {data-indent=2} | string | 负责人证件号
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 微信支付平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->merchants->putAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'sub_mchid' => '20000100',
    'name' => 'Merchant name',
    'shortname' => 'Merchant shortname',
    'office_phone' => '075586010000',
    'contact' => [
      'name' => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category' => 644,
    'channel_id' => '3200000001',
    'merchant_country_code' => '344',
    'merchant_type' => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date' => '2020-10-16',
    'registration_certificate_copy' => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number' => '555588889999',
    'business' => [
      'business_type' => 'BOTH',
      'app_download' => 'https://download.qq.com',
      'website' => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program' => 'wx8888888888888888',
      'store_address' => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos' => '[Media_id1, Media_id2, Media_id3]',
      'mcc' => '4214',
    ],
    'director' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
    'principal' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/merchants')->putAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'sub_mchid' => '20000100',
    'name' => 'Merchant name',
    'shortname' => 'Merchant shortname',
    'office_phone' => '075586010000',
    'contact' => [
      'name' => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category' => 644,
    'channel_id' => '3200000001',
    'merchant_country_code' => '344',
    'merchant_type' => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date' => '2020-10-16',
    'registration_certificate_copy' => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number' => '555588889999',
    'business' => [
      'business_type' => 'BOTH',
      'app_download' => 'https://download.qq.com',
      'website' => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program' => 'wx8888888888888888',
      'store_address' => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos' => '[Media_id1, Media_id2, Media_id3]',
      'mcc' => '4214',
    ],
    'director' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
    'principal' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/merchants']->putAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'sub_mchid' => '20000100',
    'name' => 'Merchant name',
    'shortname' => 'Merchant shortname',
    'office_phone' => '075586010000',
    'contact' => [
      'name' => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category' => 644,
    'channel_id' => '3200000001',
    'merchant_country_code' => '344',
    'merchant_type' => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date' => '2020-10-16',
    'registration_certificate_copy' => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number' => '555588889999',
    'business' => [
      'business_type' => 'BOTH',
      'app_download' => 'https://download.qq.com',
      'website' => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program' => 'wx8888888888888888',
      'store_address' => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos' => '[Media_id1, Media_id2, Media_id3]',
      'mcc' => '4214',
    ],
    'director' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
    'principal' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->merchants->put([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'sub_mchid' => '20000100',
    'name' => 'Merchant name',
    'shortname' => 'Merchant shortname',
    'office_phone' => '075586010000',
    'contact' => [
      'name' => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category' => 644,
    'channel_id' => '3200000001',
    'merchant_country_code' => '344',
    'merchant_type' => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date' => '2020-10-16',
    'registration_certificate_copy' => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number' => '555588889999',
    'business' => [
      'business_type' => 'BOTH',
      'app_download' => 'https://download.qq.com',
      'website' => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program' => 'wx8888888888888888',
      'store_address' => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos' => '[Media_id1, Media_id2, Media_id3]',
      'mcc' => '4214',
    ],
    'director' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
    'principal' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/merchants')->put([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'sub_mchid' => '20000100',
    'name' => 'Merchant name',
    'shortname' => 'Merchant shortname',
    'office_phone' => '075586010000',
    'contact' => [
      'name' => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category' => 644,
    'channel_id' => '3200000001',
    'merchant_country_code' => '344',
    'merchant_type' => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date' => '2020-10-16',
    'registration_certificate_copy' => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number' => '555588889999',
    'business' => [
      'business_type' => 'BOTH',
      'app_download' => 'https://download.qq.com',
      'website' => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program' => 'wx8888888888888888',
      'store_address' => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos' => '[Media_id1, Media_id2, Media_id3]',
      'mcc' => '4214',
    ],
    'director' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
    'principal' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/merchants']->put([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sp_appid' => 'wx8888888888888888',
    'sp_mchid' => '3200000001',
    'sub_mchid' => '20000100',
    'name' => 'Merchant name',
    'shortname' => 'Merchant shortname',
    'office_phone' => '075586010000',
    'contact' => [
      'name' => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category' => 644,
    'channel_id' => '3200000001',
    'merchant_country_code' => '344',
    'merchant_type' => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date' => '2020-10-16',
    'registration_certificate_copy' => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number' => '555588889999',
    'business' => [
      'business_type' => 'BOTH',
      'app_download' => 'https://download.qq.com',
      'website' => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program' => 'wx8888888888888888',
      'store_address' => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos' => '[Media_id1, Media_id2, Media_id3]',
      'mcc' => '4214',
    ],
    'director' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
    'principal' => [
      'name' => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 子商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_2_3.shtml)