# 子商户进件及进件信息修改（融合钱包）(可用版本) {#mix}

## 子商户进件（融合钱包） {#post}

机构提交子商户资料，微信支付系统会为每个子商户创建子商户号。

::: warning :beginner: {.im-redesigned}

本接口服务已于 `2022.09.08` (北京时间)发布新版，新接口见[这里](/openapi/v3/global/merchants#post)，此文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri {data-required} | string | 声明接入点`https://api.mch.weixin.qq.com/hk/`(国内接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_appid {data-required data-indent=1} | string | 机构appid
| sp_mchid {data-required data-indent=1} | string | 机构商户号
| name {data-required data-indent=1} | string | 子商户全称
| shortname {data-required data-indent=1} | string | 子商户简称
| office_phone {data-required data-indent=1} | string | 公司电话
| contact {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 联系人信息
| name {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人名称
| phone {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人电话
| email {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人邮箱
| business_category {data-required data-indent=1} | integer | 类目
| channel_id {data-indent=1} | string | 渠道号
| merchant_country_code {data-required data-indent=1} | string | 注册国家或区域
| merchant_type {data-required data-indent=1} | string | 商户类型<br/>`ENTERPRISE` \| `INDIVIDUAL` 枚举值之一
| registration_certificate_number {data-indent=1} | string | 公司注册文件编号
| registration_certificate_date {data-indent=1} | string | 公司注册文件过期时间
| registration_certificate_copy {data-indent=1} | string | 公司注册文件照片
| settlement_bank_number {data-indent=1} | string | 子商户银行结算账户信息
| business {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 业务信息
| business_type {data-required data-indent=2} | string | 业务类型<br/>`ONLINE` \| `OFFLINE` \| `BOTH` 枚举值之一
| app_download {data-indent=2} | string | APP下载链接
| website {data-indent=2} | string | 业务网站
| office_account {data-indent=2} | string | 公众号
| mini_program {data-indent=2} | string | 小程序
| store_address {data-indent=2} | string | 门店地址
| store_photos {data-indent=2} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 门店照片`JSON`格式字符串
| {colspan=3 .im-table-line}
| media_id {data-required data-indent=3} | string[] | 媒体文件MediaId列表
| mcc {data-indent=2} | string | MCC码
| director {data-indent=1} | object {data-tooltip="对应PHP的array"} | 董事信息
| name {data-indent=2} | string | 董事姓名
| number {data-indent=2} | string | 董事证件号
| principal {data-indent=1} | object {data-tooltip="对应PHP的array"} | 负责人信息
| name {data-indent=2} | string | 负责人姓名
| number {data-indent=2} | string | 负责人证件号
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Idempotency-Key {data-indent=1} | string | 由商户侧生成的唯一key，用来标识多次重试是否为同一请求
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchants->postAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'name'                            => 'Merchant name',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => \json_encode([
        'Media_id1',
        'Media_id2',
        'Media_id3',
      ]),
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => 'GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchants')->postAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'name'                            => 'Merchant name',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => \json_encode([
        'Media_id1',
        'Media_id2',
        'Media_id3',
      ]),
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => 'GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchants']->postAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'name'                            => 'Merchant name',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => \json_encode([
        'Media_id1',
        'Media_id2',
        'Media_id3',
      ]),
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => 'GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchants->post([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'name'                            => 'Merchant name',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => \json_encode([
        'Media_id1',
        'Media_id2',
        'Media_id3',
      ]),
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => 'GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchants')->post([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'name'                            => 'Merchant name',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => \json_encode([
        'Media_id1',
        'Media_id2',
        'Media_id3',
      ]),
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => 'GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchants']->post([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'name'                            => 'Merchant name',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => \json_encode([
        'Media_id1',
        'Media_id2',
        'Media_id3',
      ]),
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Idempotency-Key' => 'GzPCeo963zXKcO2hDVD8AjXIpgrj',
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 子商户号
| verification_status | string | 验证状态<br/>`Under Review` \| `Approved` 枚举值之一
| description | string | 验证状态描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/Onborading_Sub_Merchant/chapter3_1.shtml)

## 修改子商户（融合钱包） {#put}

用于机构子商户创建成功后，接口提供子商户信息修改

::: warning :beginner: {.im-redesigned}

本接口服务已于 `2022.09.08` (北京时间)发布新版，新接口见[这里](/openapi/v3/global/merchants/{sub_mchid}#patch)，此文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri {data-required} | string | 声明接入点`https://api.mch.weixin.qq.com/hk/`(国内接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_appid {data-required data-indent=1} | string | 机构appid
| sp_mchid {data-required data-indent=1} | string | 机构商户号
| sub_mchid {data-required data-indent=1} | string | 子商户号
| name {data-required data-indent=1} | string | 子商户全称
| shortname {data-required data-indent=1} | string | 子商户简称
| office_phone {data-required data-indent=1} | string | 公司电话
| contact {data-indent=1} | object {data-tooltip="对应PHP的array"} | 联系人信息
| name {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人名称
| phone {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人电话
| email {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 联系人邮箱
| business_category {data-required data-indent=1} | integer | 类目
| channel_id {data-indent=1} | string | 渠道号
| merchant_country_code {data-required data-indent=1} | string | 注册国家或区域
| merchant_type {data-required data-indent=1} | string | 商户类型<br/>`ENTERPRISE` \| `INDIVIDUAL` 枚举值之一
| registration_certificate_number {data-indent=1} | string | 公司注册文件编号
| registration_certificate_date {data-indent=1} | string | 公司注册文件过期时间
| registration_certificate_copy {data-indent=1} | string | 公司注册文件照片
| settlement_bank_number {data-indent=1} | string | 子商户银行结算账户信息
| business {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 业务信息
| business_type {data-required data-indent=2} | string | 业务类型<br/>`ONLINE` \| `OFFLINE` \| `BOTH` 枚举值之一
| app_download {data-indent=2} | string | APP下载链接
| website {data-indent=2} | string | 业务网站
| office_account {data-indent=2} | string | 公众号
| mini_program {data-indent=2} | string | 小程序
| store_address {data-indent=2} | string | 门店地址
| store_photos {data-indent=2} | string {data-tooltip=使用json_encode后的字符串 data-encoded=by-json_encode} | 门店照片`JSON`格式字符串
| {colspan=3 .im-table-line}
| media_id {data-required data-indent=3} | string[] | 媒体文件MediaId列表
| mcc {data-indent=2} | string | MCC码
| director {data-indent=1} | object {data-tooltip="对应PHP的array"} | 董事信息
| name {data-indent=2} | string | 董事姓名
| number {data-indent=2} | string | 董事证件号
| principal {data-indent=1} | object {data-tooltip="对应PHP的array"} | 负责人信息
| name {data-indent=2} | string | 负责人姓名
| number {data-indent=2} | string | 负责人证件号
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchants->putAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'sub_mchid'                       => '20000100',
    'name'                            => 'Merchant name',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => \json_encode([
        'Media_id1',
        'Media_id2',
        'Media_id3',
      ]),
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchants')->putAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'sub_mchid'                       => '20000100',
    'name'                            => 'Merchant name',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => \json_encode([
        'Media_id1',
        'Media_id2',
        'Media_id3',
      ]),
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchants']->putAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'sub_mchid'                       => '20000100',
    'name'                            => 'Merchant name',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => \json_encode([
        'Media_id1',
        'Media_id2',
        'Media_id3',
      ]),
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchants->put([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'sub_mchid'                       => '20000100',
    'name'                            => 'Merchant name',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => \json_encode([
        'Media_id1',
        'Media_id2',
        'Media_id3',
      ]),
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchants')->put([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'sub_mchid'                       => '20000100',
    'name'                            => 'Merchant name',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => \json_encode([
        'Media_id1',
        'Media_id2',
        'Media_id3',
      ]),
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchants']->put([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'sp_appid'                        => 'wx8888888888888888',
    'sp_mchid'                        => '3200000001',
    'sub_mchid'                       => '20000100',
    'name'                            => 'Merchant name',
    'shortname'                       => 'Merchant shortname',
    'office_phone'                    => '075586010000',
    'contact'                         => [
      'name'  => '李先生',
      'phone' => '075586010000',
      'email' => 'test@test.com',
    ],
    'business_category'               => 644,
    'channel_id'                      => '3200000001',
    'merchant_country_code'           => '344',
    'merchant_type'                   => 'ENTERPRISE',
    'registration_certificate_number' => '5555-8888',
    'registration_certificate_date'   => '2020-10-16',
    'registration_certificate_copy'   => 'w7yQFawBtja5uEdm_aoGhHuxkrIaqB4GzPCeo963zXKcO2hDVD8AjXIpgrj-x95m5iclsanHYauUt1__DsWXok2NqRliv2SDL42QoEmHIPs',
    'settlement_bank_number'          => '555588889999',
    'business'                        => [
      'business_type'  => 'BOTH',
      'app_download'   => 'https://download.qq.com',
      'website'        => 'https://www.qq.com',
      'office_account' => 'wx8888888888888888',
      'mini_program'   => 'wx8888888888888888',
      'store_address'  => '10F World Finance Centre (South Office), 11 Canton Road, Tsim Sha Tsui, Hong Kong',
      'store_photos'   => \json_encode([
        'Media_id1',
        'Media_id2',
        'Media_id3',
      ]),
      'mcc'            => '4214',
    ],
    'director'                        => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
    'principal'                       => [
      'name'   => 'Bob',
      'number' => '5555-8888',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 子商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/Onborading_Sub_Merchant/chapter3_3.shtml)
