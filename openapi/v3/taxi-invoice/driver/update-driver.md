---
title: 更新司机信息
description: 新增、更新司机信息，司机需有实名认证的微信号，否则新增、更新失败，司机所在的公司必须已经成为服务商的特约商户，否则新增、更新失败。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| driver_name {data-required data-indent=1} | string | 司机姓名
| id_card_number {data-required data-indent=1} | string | 司机身份证号码
| company_name {data-required data-indent=1} | string | 公司名称
| mchid {data-required data-indent=1} | string | 商户号
| driver_license {data-required data-indent=1} | string | 营运资格证号
| driver_category {data-required data-indent=1} | string | 司机类别
| driver_status {data-required data-indent=1} | string | 岗位状态
| driver_photo {data-indent=1} | object {data-tooltip="对应PHP的array"} | 司机头像
| photo_type {data-indent=2} | string | 照片类型
| photo_digest {data-indent=2} | object {data-tooltip="对应PHP的array"} | 司机头像摘要
| hash_type {data-indent=3} | string | 哈希类型
| hash_value {data-indent=3} | string | 哈希值
| photo_url {data-indent=2} | string | 头像url
| photo_icon {data-indent=2} | string | 头像icon
| region_id {data-required data-indent=1} | integer | 行政区划ID
| headers | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->taxiInvoice->driver->updateDriver->postAsync([
  'json' => [
    'driver_name'     => 'OpldWegML3fJ3/U5L6av0bU6GcIOaOhi+SY04APUv4dfFrD7US5TWiL5sVnQSz/wvsvQ==',
    'id_card_number'  => 'OpldWegML3fJ3/U5L6av0bU6GcIOaOhXM/t2DrNLxVUb77DCnz421UAD7US5TWiL5sVnQSz/wvsvQ==',
    'company_name'    => '深圳市未来有限公司',
    'mchid'           => '1900000109',
    'driver_license'  => '6298416',
    'driver_category' => 'MAIN',
    'driver_status'   => 'ON_DUTY',
    'driver_photo'    => [
      'photo_type'   => 'PHOTO_URL',
      'photo_digest' => [
        'hash_type'  => 'MD5',
        'hash_value' => 'e10adc3949ba59abbe56e057f20f883e',
      ],
      'photo_url'    => 'http://www.abc.com/driver.icon',
      'photo_icon'   => 'Pm+zC+kaOSdRmVQP7pPQ++Ky9C8FaVp8El2sLT3b/M887b3YnrknrmiiumOkNDklrUdznfitoFkPC94vlnbbESwgn7hBXge3JFHw80S0l8J2jSIZN8PnMrHIZiWPI74xwKKK35n9X3+1+hzKK+t7fZ/U9Bg8P2L2ixmBdpTaRjtivPdOt28P3THTp5rXkjCNwRnoRjB/GiisYHRPc7WHV7jWvC32m42+ctyqZQYBx3I9a6GZisqMOCZXP4+STRRXMzqiZPmv8A3jRRRUFH/9k=',
    ],
    'region_id'       => 510100,
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
$instance->chain('v3/taxi-invoice/driver/update-driver')->postAsync([
  'json' => [
    'driver_name'     => 'OpldWegML3fJ3/U5L6av0bU6GcIOaOhi+SY04APUv4dfFrD7US5TWiL5sVnQSz/wvsvQ==',
    'id_card_number'  => 'OpldWegML3fJ3/U5L6av0bU6GcIOaOhXM/t2DrNLxVUb77DCnz421UAD7US5TWiL5sVnQSz/wvsvQ==',
    'company_name'    => '深圳市未来有限公司',
    'mchid'           => '1900000109',
    'driver_license'  => '6298416',
    'driver_category' => 'MAIN',
    'driver_status'   => 'ON_DUTY',
    'driver_photo'    => [
      'photo_type'   => 'PHOTO_URL',
      'photo_digest' => [
        'hash_type'  => 'MD5',
        'hash_value' => 'e10adc3949ba59abbe56e057f20f883e',
      ],
      'photo_url'    => 'http://www.abc.com/driver.icon',
      'photo_icon'   => 'Pm+zC+kaOSdRmVQP7pPQ++Ky9C8FaVp8El2sLT3b/M887b3YnrknrmiiumOkNDklrUdznfitoFkPC94vlnbbESwgn7hBXge3JFHw80S0l8J2jSIZN8PnMrHIZiWPI74xwKKK35n9X3+1+hzKK+t7fZ/U9Bg8P2L2ixmBdpTaRjtivPdOt28P3THTp5rXkjCNwRnoRjB/GiisYHRPc7WHV7jWvC32m42+ctyqZQYBx3I9a6GZisqMOCZXP4+STRRXMzqiZPmv8A3jRRRUFH/9k=',
    ],
    'region_id'       => 510100,
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
$instance['v3/taxi-invoice/driver/update-driver']->postAsync([
  'json' => [
    'driver_name'     => 'OpldWegML3fJ3/U5L6av0bU6GcIOaOhi+SY04APUv4dfFrD7US5TWiL5sVnQSz/wvsvQ==',
    'id_card_number'  => 'OpldWegML3fJ3/U5L6av0bU6GcIOaOhXM/t2DrNLxVUb77DCnz421UAD7US5TWiL5sVnQSz/wvsvQ==',
    'company_name'    => '深圳市未来有限公司',
    'mchid'           => '1900000109',
    'driver_license'  => '6298416',
    'driver_category' => 'MAIN',
    'driver_status'   => 'ON_DUTY',
    'driver_photo'    => [
      'photo_type'   => 'PHOTO_URL',
      'photo_digest' => [
        'hash_type'  => 'MD5',
        'hash_value' => 'e10adc3949ba59abbe56e057f20f883e',
      ],
      'photo_url'    => 'http://www.abc.com/driver.icon',
      'photo_icon'   => 'Pm+zC+kaOSdRmVQP7pPQ++Ky9C8FaVp8El2sLT3b/M887b3YnrknrmiiumOkNDklrUdznfitoFkPC94vlnbbESwgn7hBXge3JFHw80S0l8J2jSIZN8PnMrHIZiWPI74xwKKK35n9X3+1+hzKK+t7fZ/U9Bg8P2L2ixmBdpTaRjtivPdOt28P3THTp5rXkjCNwRnoRjB/GiisYHRPc7WHV7jWvC32m42+ctyqZQYBx3I9a6GZisqMOCZXP4+STRRXMzqiZPmv8A3jRRRUFH/9k=',
    ],
    'region_id'       => 510100,
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
$response = $instance->v3->taxiInvoice->driver->updateDriver->post([
  'json' => [
    'driver_name'     => 'OpldWegML3fJ3/U5L6av0bU6GcIOaOhi+SY04APUv4dfFrD7US5TWiL5sVnQSz/wvsvQ==',
    'id_card_number'  => 'OpldWegML3fJ3/U5L6av0bU6GcIOaOhXM/t2DrNLxVUb77DCnz421UAD7US5TWiL5sVnQSz/wvsvQ==',
    'company_name'    => '深圳市未来有限公司',
    'mchid'           => '1900000109',
    'driver_license'  => '6298416',
    'driver_category' => 'MAIN',
    'driver_status'   => 'ON_DUTY',
    'driver_photo'    => [
      'photo_type'   => 'PHOTO_URL',
      'photo_digest' => [
        'hash_type'  => 'MD5',
        'hash_value' => 'e10adc3949ba59abbe56e057f20f883e',
      ],
      'photo_url'    => 'http://www.abc.com/driver.icon',
      'photo_icon'   => 'Pm+zC+kaOSdRmVQP7pPQ++Ky9C8FaVp8El2sLT3b/M887b3YnrknrmiiumOkNDklrUdznfitoFkPC94vlnbbESwgn7hBXge3JFHw80S0l8J2jSIZN8PnMrHIZiWPI74xwKKK35n9X3+1+hzKK+t7fZ/U9Bg8P2L2ixmBdpTaRjtivPdOt28P3THTp5rXkjCNwRnoRjB/GiisYHRPc7WHV7jWvC32m42+ctyqZQYBx3I9a6GZisqMOCZXP4+STRRXMzqiZPmv8A3jRRRUFH/9k=',
    ],
    'region_id'       => 510100,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/taxi-invoice/driver/update-driver')->post([
  'json' => [
    'driver_name'     => 'OpldWegML3fJ3/U5L6av0bU6GcIOaOhi+SY04APUv4dfFrD7US5TWiL5sVnQSz/wvsvQ==',
    'id_card_number'  => 'OpldWegML3fJ3/U5L6av0bU6GcIOaOhXM/t2DrNLxVUb77DCnz421UAD7US5TWiL5sVnQSz/wvsvQ==',
    'company_name'    => '深圳市未来有限公司',
    'mchid'           => '1900000109',
    'driver_license'  => '6298416',
    'driver_category' => 'MAIN',
    'driver_status'   => 'ON_DUTY',
    'driver_photo'    => [
      'photo_type'   => 'PHOTO_URL',
      'photo_digest' => [
        'hash_type'  => 'MD5',
        'hash_value' => 'e10adc3949ba59abbe56e057f20f883e',
      ],
      'photo_url'    => 'http://www.abc.com/driver.icon',
      'photo_icon'   => 'Pm+zC+kaOSdRmVQP7pPQ++Ky9C8FaVp8El2sLT3b/M887b3YnrknrmiiumOkNDklrUdznfitoFkPC94vlnbbESwgn7hBXge3JFHw80S0l8J2jSIZN8PnMrHIZiWPI74xwKKK35n9X3+1+hzKK+t7fZ/U9Bg8P2L2ixmBdpTaRjtivPdOt28P3THTp5rXkjCNwRnoRjB/GiisYHRPc7WHV7jWvC32m42+ctyqZQYBx3I9a6GZisqMOCZXP4+STRRXMzqiZPmv8A3jRRRUFH/9k=',
    ],
    'region_id'       => 510100,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/taxi-invoice/driver/update-driver']->post([
  'json' => [
    'driver_name'     => 'OpldWegML3fJ3/U5L6av0bU6GcIOaOhi+SY04APUv4dfFrD7US5TWiL5sVnQSz/wvsvQ==',
    'id_card_number'  => 'OpldWegML3fJ3/U5L6av0bU6GcIOaOhXM/t2DrNLxVUb77DCnz421UAD7US5TWiL5sVnQSz/wvsvQ==',
    'company_name'    => '深圳市未来有限公司',
    'mchid'           => '1900000109',
    'driver_license'  => '6298416',
    'driver_category' => 'MAIN',
    'driver_status'   => 'ON_DUTY',
    'driver_photo'    => [
      'photo_type'   => 'PHOTO_URL',
      'photo_digest' => [
        'hash_type'  => 'MD5',
        'hash_value' => 'e10adc3949ba59abbe56e057f20f883e',
      ],
      'photo_url'    => 'http://www.abc.com/driver.icon',
      'photo_icon'   => 'Pm+zC+kaOSdRmVQP7pPQ++Ky9C8FaVp8El2sLT3b/M887b3YnrknrmiiumOkNDklrUdznfitoFkPC94vlnbbESwgn7hBXge3JFHw80S0l8J2jSIZN8PnMrHIZiWPI74xwKKK35n9X3+1+hzKK+t7fZ/U9Bg8P2L2ixmBdpTaRjtivPdOt28P3THTp5rXkjCNwRnoRjB/GiisYHRPc7WHV7jWvC32m42+ctyqZQYBx3I9a6GZisqMOCZXP4+STRRXMzqiZPmv8A3jRRRUFH/9k=',
    ],
    'region_id'       => 510100,
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
| driver_name {data-required} | string | 司机姓名
| id_card_number {data-required} | string | 司机身份证号码
| company_name {data-required} | string | 公司名称
| mchid {data-required} | string | 商户号
| driver_license {data-required} | string | 营运资格证号
| driver_category {data-required} | string | 司机类别
| driver_status {data-required} | string | 岗位状态
| driver_photo | object {data-tooltip="对应PHP的array"} | 司机头像
| photo_type {data-indent=1} | string | 照片类型
| photo_digest {data-indent=1} | object {data-tooltip="对应PHP的array"} | 司机头像摘要
| hash_type {data-indent=2} | string | 哈希类型
| hash_value {data-indent=2} | string | 哈希值
| photo_url {data-indent=1} | string | 头像url
| photo_icon {data-indent=1} | string | 头像icon
| region_id {data-required} | integer | 行政区划ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/driver/update-driver.html)
