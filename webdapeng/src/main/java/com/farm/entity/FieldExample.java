package com.farm.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class FieldExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public FieldExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andAreaIsNull() {
            addCriterion("area is null");
            return (Criteria) this;
        }

        public Criteria andAreaIsNotNull() {
            addCriterion("area is not null");
            return (Criteria) this;
        }

        public Criteria andAreaEqualTo(Float value) {
            addCriterion("area =", value, "area");
            return (Criteria) this;
        }

        public Criteria andAreaNotEqualTo(Float value) {
            addCriterion("area <>", value, "area");
            return (Criteria) this;
        }

        public Criteria andAreaGreaterThan(Float value) {
            addCriterion("area >", value, "area");
            return (Criteria) this;
        }

        public Criteria andAreaGreaterThanOrEqualTo(Float value) {
            addCriterion("area >=", value, "area");
            return (Criteria) this;
        }

        public Criteria andAreaLessThan(Float value) {
            addCriterion("area <", value, "area");
            return (Criteria) this;
        }

        public Criteria andAreaLessThanOrEqualTo(Float value) {
            addCriterion("area <=", value, "area");
            return (Criteria) this;
        }

        public Criteria andAreaIn(List<Float> values) {
            addCriterion("area in", values, "area");
            return (Criteria) this;
        }

        public Criteria andAreaNotIn(List<Float> values) {
            addCriterion("area not in", values, "area");
            return (Criteria) this;
        }

        public Criteria andAreaBetween(Float value1, Float value2) {
            addCriterion("area between", value1, value2, "area");
            return (Criteria) this;
        }

        public Criteria andAreaNotBetween(Float value1, Float value2) {
            addCriterion("area not between", value1, value2, "area");
            return (Criteria) this;
        }

        public Criteria andUsernameIsNull() {
            addCriterion("username is null");
            return (Criteria) this;
        }

        public Criteria andUsernameIsNotNull() {
            addCriterion("username is not null");
            return (Criteria) this;
        }

        public Criteria andUsernameEqualTo(String value) {
            addCriterion("username =", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameNotEqualTo(String value) {
            addCriterion("username <>", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameGreaterThan(String value) {
            addCriterion("username >", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameGreaterThanOrEqualTo(String value) {
            addCriterion("username >=", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameLessThan(String value) {
            addCriterion("username <", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameLessThanOrEqualTo(String value) {
            addCriterion("username <=", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameLike(String value) {
            addCriterion("username like", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameNotLike(String value) {
            addCriterion("username not like", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameIn(List<String> values) {
            addCriterion("username in", values, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameNotIn(List<String> values) {
            addCriterion("username not in", values, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameBetween(String value1, String value2) {
            addCriterion("username between", value1, value2, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameNotBetween(String value1, String value2) {
            addCriterion("username not between", value1, value2, "username");
            return (Criteria) this;
        }

        public Criteria andair_temperatureIsNull() {
            addCriterion("air_temperature is null");
            return (Criteria) this;
        }

        public Criteria andair_temperatureIsNotNull() {
            addCriterion("air_temperature is not null");
            return (Criteria) this;
        }

        public Criteria andair_temperatureEqualTo(String value) {
            addCriterion("air_temperature =", value, "air_temperature");
            return (Criteria) this;
        }

        public Criteria andair_temperatureNotEqualTo(String value) {
            addCriterion("air_temperature <>", value, "air_temperature");
            return (Criteria) this;
        }

        public Criteria andair_temperatureGreaterThan(String value) {
            addCriterion("air_temperature >", value, "air_temperature");
            return (Criteria) this;
        }

        public Criteria andair_temperatureGreaterThanOrEqualTo(String value) {
            addCriterion("air_temperature >=", value, "air_temperature");
            return (Criteria) this;
        }

        public Criteria andair_temperatureLessThan(String value) {
            addCriterion("air_temperature <", value, "air_temperature");
            return (Criteria) this;
        }

        public Criteria andair_temperatureLessThanOrEqualTo(String value) {
            addCriterion("air_temperature <=", value, "air_temperature");
            return (Criteria) this;
        }

        public Criteria andair_temperatureLike(String value) {
            addCriterion("air_temperature like", value, "air_temperature");
            return (Criteria) this;
        }

        public Criteria andair_temperatureNotLike(String value) {
            addCriterion("air_temperature not like", value, "air_temperature");
            return (Criteria) this;
        }

        public Criteria andair_temperatureIn(List<String> values) {
            addCriterion("air_temperature in", values, "air_temperature");
            return (Criteria) this;
        }

        public Criteria andair_temperatureNotIn(List<String> values) {
            addCriterion("air_temperature not in", values, "air_temperature");
            return (Criteria) this;
        }

        public Criteria andair_temperatureBetween(String value1, String value2) {
            addCriterion("air_temperature between", value1, value2, "air_temperature");
            return (Criteria) this;
        }

        public Criteria andair_temperatureNotBetween(String value1, String value2) {
            addCriterion("air_temperature not between", value1, value2, "air_temperature");
            return (Criteria) this;
        }

        public Criteria andair_humidityIsNull() {
            addCriterion("air_humidity is null");
            return (Criteria) this;
        }

        public Criteria andair_humidityIsNotNull() {
            addCriterion("air_humidity is not null");
            return (Criteria) this;
        }

        public Criteria andair_humidityEqualTo(String value) {
            addCriterion("air_humidity =", value, "air_humidity");
            return (Criteria) this;
        }

        public Criteria andair_humidityNotEqualTo(String value) {
            addCriterion("air_humidity <>", value, "air_humidity");
            return (Criteria) this;
        }

        public Criteria andair_humidityGreaterThan(String value) {
            addCriterion("air_humidity >", value, "air_humidity");
            return (Criteria) this;
        }

        public Criteria andair_humidityGreaterThanOrEqualTo(String value) {
            addCriterion("air_humidity >=", value, "air_humidity");
            return (Criteria) this;
        }

        public Criteria andair_humidityLessThan(String value) {
            addCriterion("air_humidity <", value, "air_humidity");
            return (Criteria) this;
        }

        public Criteria andair_humidityLessThanOrEqualTo(String value) {
            addCriterion("air_humidity <=", value, "air_humidity");
            return (Criteria) this;
        }

        public Criteria andair_humidityLike(String value) {
            addCriterion("air_humidity like", value, "air_humidity");
            return (Criteria) this;
        }

        public Criteria andair_humidityNotLike(String value) {
            addCriterion("air_humidity not like", value, "air_humidity");
            return (Criteria) this;
        }

        public Criteria andair_humidityIn(List<String> values) {
            addCriterion("air_humidity in", values, "air_humidity");
            return (Criteria) this;
        }

        public Criteria andair_humidityNotIn(List<String> values) {
            addCriterion("air_humidity not in", values, "air_humidity");
            return (Criteria) this;
        }

        public Criteria andair_humidityBetween(String value1, String value2) {
            addCriterion("air_humidity between", value1, value2, "air_humidity");
            return (Criteria) this;
        }

        public Criteria andair_humidityNotBetween(String value1, String value2) {
            addCriterion("air_humidity not between", value1, value2, "air_humidity");
            return (Criteria) this;
        }

        public Criteria andco2IsNull() {
            addCriterion("co2 is null");
            return (Criteria) this;
        }

        public Criteria andco2IsNotNull() {
            addCriterion("co2 is not null");
            return (Criteria) this;
        }

        public Criteria andco2EqualTo(String value) {
            addCriterion("co2 =", value, "co2");
            return (Criteria) this;
        }

        public Criteria andco2NotEqualTo(String value) {
            addCriterion("co2 <>", value, "co2");
            return (Criteria) this;
        }

        public Criteria andco2GreaterThan(String value) {
            addCriterion("co2 >", value, "co2");
            return (Criteria) this;
        }

        public Criteria andco2GreaterThanOrEqualTo(String value) {
            addCriterion("co2 >=", value, "co2");
            return (Criteria) this;
        }

        public Criteria andco2LessThan(String value) {
            addCriterion("co2 <", value, "co2");
            return (Criteria) this;
        }

        public Criteria andco2LessThanOrEqualTo(String value) {
            addCriterion("co2 <=", value, "co2");
            return (Criteria) this;
        }

        public Criteria andco2Like(String value) {
            addCriterion("co2 like", value, "co2");
            return (Criteria) this;
        }

        public Criteria andco2NotLike(String value) {
            addCriterion("co2 not like", value, "co2");
            return (Criteria) this;
        }

        public Criteria andco2In(List<String> values) {
            addCriterion("co2 in", values, "co2");
            return (Criteria) this;
        }

        public Criteria andco2NotIn(List<String> values) {
            addCriterion("co2 not in", values, "co2");
            return (Criteria) this;
        }

        public Criteria andco2Between(String value1, String value2) {
            addCriterion("co2 between", value1, value2, "co2");
            return (Criteria) this;
        }

        public Criteria andco2NotBetween(String value1, String value2) {
            addCriterion("co2 not between", value1, value2, "co2");
            return (Criteria) this;
        }

        public Criteria andilluminanceIsNull() {
            addCriterion("illuminance is null");
            return (Criteria) this;
        }

        public Criteria andilluminanceIsNotNull() {
            addCriterion("illuminance is not null");
            return (Criteria) this;
        }

        public Criteria andilluminanceEqualTo(String value) {
            addCriterion("illuminance =", value, "illuminance");
            return (Criteria) this;
        }

        public Criteria andilluminanceNotEqualTo(String value) {
            addCriterion("illuminance <>", value, "illuminance");
            return (Criteria) this;
        }

        public Criteria andilluminanceGreaterThan(String value) {
            addCriterion("illuminance >", value, "illuminance");
            return (Criteria) this;
        }

        public Criteria andilluminanceGreaterThanOrEqualTo(String value) {
            addCriterion("illuminance >=", value, "illuminance");
            return (Criteria) this;
        }

        public Criteria andilluminanceLessThan(String value) {
            addCriterion("illuminance <", value, "illuminance");
            return (Criteria) this;
        }

        public Criteria andilluminanceLessThanOrEqualTo(String value) {
            addCriterion("illuminance <=", value, "illuminance");
            return (Criteria) this;
        }

        public Criteria andilluminanceLike(String value) {
            addCriterion("illuminance like", value, "illuminance");
            return (Criteria) this;
        }

        public Criteria andilluminanceNotLike(String value) {
            addCriterion("illuminance not like", value, "illuminance");
            return (Criteria) this;
        }

        public Criteria andilluminanceIn(List<String> values) {
            addCriterion("illuminance in", values, "illuminance");
            return (Criteria) this;
        }

        public Criteria andilluminanceNotIn(List<String> values) {
            addCriterion("illuminance not in", values, "illuminance");
            return (Criteria) this;
        }

        public Criteria andilluminanceBetween(String value1, String value2) {
            addCriterion("illuminance between", value1, value2, "illuminance");
            return (Criteria) this;
        }

        public Criteria andilluminanceNotBetween(String value1, String value2) {
            addCriterion("illuminance not between", value1, value2, "illuminance");
            return (Criteria) this;
        }

        public Criteria andsoil_temperatureIsNull() {
            addCriterion("soil_temperature is null");
            return (Criteria) this;
        }

        public Criteria andsoil_temperatureIsNotNull() {
            addCriterion("soil_temperature is not null");
            return (Criteria) this;
        }

        public Criteria andsoil_temperatureEqualTo(String value) {
            addCriterion("soil_temperature =", value, "soil_temperature");
            return (Criteria) this;
        }

        public Criteria andsoil_temperatureNotEqualTo(String value) {
            addCriterion("soil_temperature <>", value, "soil_temperature");
            return (Criteria) this;
        }

        public Criteria andsoil_temperatureGreaterThan(String value) {
            addCriterion("soil_temperature >", value, "soil_temperature");
            return (Criteria) this;
        }

        public Criteria andsoil_temperatureGreaterThanOrEqualTo(String value) {
            addCriterion("soil_temperature >=", value, "soil_temperature");
            return (Criteria) this;
        }

        public Criteria andsoil_temperatureLessThan(String value) {
            addCriterion("soil_temperature <", value, "soil_temperature");
            return (Criteria) this;
        }

        public Criteria andsoil_temperatureLessThanOrEqualTo(String value) {
            addCriterion("soil_temperature <=", value, "soil_temperature");
            return (Criteria) this;
        }

        public Criteria andsoil_temperatureLike(String value) {
            addCriterion("soil_temperature like", value, "soil_temperature");
            return (Criteria) this;
        }

        public Criteria andsoil_temperatureNotLike(String value) {
            addCriterion("soil_temperature not like", value, "soil_temperature");
            return (Criteria) this;
        }

        public Criteria andsoil_temperatureIn(List<String> values) {
            addCriterion("soil_temperature in", values, "soil_temperature");
            return (Criteria) this;
        }

        public Criteria andsoil_temperatureNotIn(List<String> values) {
            addCriterion("soil_temperature not in", values, "soil_temperature");
            return (Criteria) this;
        }

        public Criteria andsoil_temperatureBetween(String value1, String value2) {
            addCriterion("soil_temperature between", value1, value2, "soil_temperature");
            return (Criteria) this;
        }

        public Criteria andsoil_temperatureNotBetween(String value1, String value2) {
            addCriterion("soil_temperature not between", value1, value2, "soil_temperature");
            return (Criteria) this;
        }

        public Criteria andsoil_humidityIsNull() {
            addCriterion("soil_humidity is null");
            return (Criteria) this;
        }

        public Criteria andsoil_humidityIsNotNull() {
            addCriterion("soil_humidity is not null");
            return (Criteria) this;
        }

        public Criteria andsoil_humidityEqualTo(String value) {
            addCriterion("soil_humidity =", value, "soil_humidity");
            return (Criteria) this;
        }

        public Criteria andsoil_humidityNotEqualTo(String value) {
            addCriterion("soil_humidity <>", value, "soil_humidity");
            return (Criteria) this;
        }

        public Criteria andsoil_humidityGreaterThan(String value) {
            addCriterion("soil_humidity >", value, "soil_humidity");
            return (Criteria) this;
        }

        public Criteria andsoil_humidityGreaterThanOrEqualTo(String value) {
            addCriterion("soil_humidity >=", value, "soil_humidity");
            return (Criteria) this;
        }

        public Criteria andsoil_humidityLessThan(String value) {
            addCriterion("soil_humidity <", value, "soil_humidity");
            return (Criteria) this;
        }

        public Criteria andsoil_humidityLessThanOrEqualTo(String value) {
            addCriterion("soil_humidity <=", value, "soil_humidity");
            return (Criteria) this;
        }

        public Criteria andsoil_humidityLike(String value) {
            addCriterion("soil_humidity like", value, "soil_humidity");
            return (Criteria) this;
        }

        public Criteria andsoil_humidityNotLike(String value) {
            addCriterion("soil_humidity not like", value, "soil_humidity");
            return (Criteria) this;
        }

        public Criteria andsoil_humidityIn(List<String> values) {
            addCriterion("soil_humidity in", values, "soil_humidity");
            return (Criteria) this;
        }

        public Criteria andsoil_humidityNotIn(List<String> values) {
            addCriterion("soil_humidity not in", values, "soil_humidity");
            return (Criteria) this;
        }

        public Criteria andsoil_humidityBetween(String value1, String value2) {
            addCriterion("soil_humidity between", value1, value2, "soil_humidity");
            return (Criteria) this;
        }

        public Criteria andsoil_humidityNotBetween(String value1, String value2) {
            addCriterion("soil_humidity not between", value1, value2, "soil_humidity");
            return (Criteria) this;
        }

        public Criteria andStartTimeIsNull() {
            addCriterion("start_time is null");
            return (Criteria) this;
        }

        public Criteria andStartTimeIsNotNull() {
            addCriterion("start_time is not null");
            return (Criteria) this;
        }

        public Criteria andStartTimeEqualTo(Date value) {
            addCriterion("start_time =", value, "startTime");
            return (Criteria) this;
        }

        public Criteria andStartTimeNotEqualTo(Date value) {
            addCriterion("start_time <>", value, "startTime");
            return (Criteria) this;
        }

        public Criteria andStartTimeGreaterThan(Date value) {
            addCriterion("start_time >", value, "startTime");
            return (Criteria) this;
        }

        public Criteria andStartTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("start_time >=", value, "startTime");
            return (Criteria) this;
        }

        public Criteria andStartTimeLessThan(Date value) {
            addCriterion("start_time <", value, "startTime");
            return (Criteria) this;
        }

        public Criteria andStartTimeLessThanOrEqualTo(Date value) {
            addCriterion("start_time <=", value, "startTime");
            return (Criteria) this;
        }

        public Criteria andStartTimeIn(List<Date> values) {
            addCriterion("start_time in", values, "startTime");
            return (Criteria) this;
        }

        public Criteria andStartTimeNotIn(List<Date> values) {
            addCriterion("start_time not in", values, "startTime");
            return (Criteria) this;
        }

        public Criteria andStartTimeBetween(Date value1, Date value2) {
            addCriterion("start_time between", value1, value2, "startTime");
            return (Criteria) this;
        }

        public Criteria andStartTimeNotBetween(Date value1, Date value2) {
            addCriterion("start_time not between", value1, value2, "startTime");
            return (Criteria) this;
        }

        public Criteria andTimeIsNull() {
            addCriterion("time is null");
            return (Criteria) this;
        }

        public Criteria andTimeIsNotNull() {
            addCriterion("time is not null");
            return (Criteria) this;
        }

        public Criteria andTimeEqualTo(Integer value) {
            addCriterion("time =", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeNotEqualTo(Integer value) {
            addCriterion("time <>", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeGreaterThan(Integer value) {
            addCriterion("time >", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeGreaterThanOrEqualTo(Integer value) {
            addCriterion("time >=", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeLessThan(Integer value) {
            addCriterion("time <", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeLessThanOrEqualTo(Integer value) {
            addCriterion("time <=", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeIn(List<Integer> values) {
            addCriterion("time in", values, "time");
            return (Criteria) this;
        }

        public Criteria andTimeNotIn(List<Integer> values) {
            addCriterion("time not in", values, "time");
            return (Criteria) this;
        }

        public Criteria andTimeBetween(Integer value1, Integer value2) {
            addCriterion("time between", value1, value2, "time");
            return (Criteria) this;
        }

        public Criteria andTimeNotBetween(Integer value1, Integer value2) {
            addCriterion("time not between", value1, value2, "time");
            return (Criteria) this;
        }

        public Criteria andStatusIsNull() {
            addCriterion("status is null");
            return (Criteria) this;
        }

        public Criteria andStatusIsNotNull() {
            addCriterion("status is not null");
            return (Criteria) this;
        }

        public Criteria andStatusEqualTo(Boolean value) {
            addCriterion("status =", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotEqualTo(Boolean value) {
            addCriterion("status <>", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThan(Boolean value) {
            addCriterion("status >", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThanOrEqualTo(Boolean value) {
            addCriterion("status >=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThan(Boolean value) {
            addCriterion("status <", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThanOrEqualTo(Boolean value) {
            addCriterion("status <=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusIn(List<Boolean> values) {
            addCriterion("status in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotIn(List<Boolean> values) {
            addCriterion("status not in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusBetween(Boolean value1, Boolean value2) {
            addCriterion("status between", value1, value2, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotBetween(Boolean value1, Boolean value2) {
            addCriterion("status not between", value1, value2, "status");
            return (Criteria) this;
        }

        public Criteria andTotalIsNull() {
            addCriterion("total is null");
            return (Criteria) this;
        }

        public Criteria andTotalIsNotNull() {
            addCriterion("total is not null");
            return (Criteria) this;
        }

        public Criteria andTotalEqualTo(Float value) {
            addCriterion("total =", value, "total");
            return (Criteria) this;
        }

        public Criteria andTotalNotEqualTo(Float value) {
            addCriterion("total <>", value, "total");
            return (Criteria) this;
        }

        public Criteria andTotalGreaterThan(Float value) {
            addCriterion("total >", value, "total");
            return (Criteria) this;
        }

        public Criteria andTotalGreaterThanOrEqualTo(Float value) {
            addCriterion("total >=", value, "total");
            return (Criteria) this;
        }

        public Criteria andTotalLessThan(Float value) {
            addCriterion("total <", value, "total");
            return (Criteria) this;
        }

        public Criteria andTotalLessThanOrEqualTo(Float value) {
            addCriterion("total <=", value, "total");
            return (Criteria) this;
        }

        public Criteria andTotalIn(List<Float> values) {
            addCriterion("total in", values, "total");
            return (Criteria) this;
        }

        public Criteria andTotalNotIn(List<Float> values) {
            addCriterion("total not in", values, "total");
            return (Criteria) this;
        }

        public Criteria andTotalBetween(Float value1, Float value2) {
            addCriterion("total between", value1, value2, "total");
            return (Criteria) this;
        }

        public Criteria andTotalNotBetween(Float value1, Float value2) {
            addCriterion("total not between", value1, value2, "total");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}