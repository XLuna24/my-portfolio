// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {
    private List<String> fact;
    
    @Override
    public void init() {
        fact = new ArrayList<>();
        fact.add("I was originally going to be an Electrical Engineer but CS is much more fun!!!");
        fact.add("Got 2 dogs, A Chihuahua and a Shih Tzu name Clyde and Coco");
        fact.add("Was able to win my first hackathon with my amazing team!!!");
        fact.add("Would rather build a 1,000 piece puzzle and hang it on my wall then buy a poster");
    }
    @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String facts = fact.get((int) (Math.random()*fact.size()));

    response.setContentType("text/html;");
    response.getWriter().println(facts);
  }
}
