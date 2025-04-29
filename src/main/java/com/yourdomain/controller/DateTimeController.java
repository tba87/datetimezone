package com.yourdomain.controller;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DateTimeController {

    private static final List<String> COMMON_TIMEZONES = Arrays.asList(
        "America/New_York",
        "Europe/London",
        "Asia/Tokyo",
        "Australia/Sydney",
        "UTC"
    );

    @GetMapping("/")
    public String showDateTime(Model model) {
        LocalDateTime now = LocalDateTime.now();
        ZoneId systemZone = ZoneId.systemDefault();

        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("hh:mm:ss a");
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("EEEE, MMMM dd, yyyy");

        model.addAttribute("currentTime", now.format(timeFormatter));
        model.addAttribute("currentDate", now.format(dateFormatter));
        model.addAttribute("systemTimezone", systemZone.toString());
        model.addAttribute("allTimezones", COMMON_TIMEZONES);

        return "index";
    }
}