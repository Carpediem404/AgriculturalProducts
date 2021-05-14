package com.farm.service;

import com.farm.entity.ConsumerInfo;

import java.util.List;

public interface ConsumerInfoService {

    //查询所有负责人信息
    List<ConsumerInfo> getAll();

    //负责人信息保存
    void saveConsumerInfo(ConsumerInfo consumerInfo);

    //负责人信息删除
    void deleteBatch(List<Integer> del_ids);

    void deleteConsumerInfo(Integer id);

    //负责人信息更新
    void updateConsumerInfo(ConsumerInfo consumerInfo);

    //根据ID查询负责人信息
    ConsumerInfo getConsumerInfo(Integer id);
}
